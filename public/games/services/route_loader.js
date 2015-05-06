/**
 * Created by Administrator on 15/5/6.
 */
define(function () {
    "use strict";

    RouteLoader.$inject = ['$http', '$routeParams', '$location'];

    function RouteLoader($http, $routeParams, $location) {
        var pageURL = "";
        var page404 = "/404";

        // Here's a simple function to see if our page exists.
        function PageExists(url) {
            var http = new XMLHttpRequest();
            http.open('HEAD', url, false);
            http.send();
            return http.status != 404;
        }

        function go404() {
            $location.path(page404);
        }

        return {

            getThePage: function () {
                // Pull information from the $routeParams,
                // which should be the :group and :page objects.
                var pageGroup = '/' + $routeParams.game;
                var pageName = '/' + $routeParams.page;
                var is404 = false; // placeholder for checking whether our page exists

                // If both :group and :page are defined, we can see if that page exists.
                if (angular.isDefined($routeParams.game) &&
                    angular.isDefined($routeParams.page)) {

                    // Build our url
                    pageURL = 'views/pages' + pageGroup + pageName + '.html';

                    // Test to see if it exists. If if does, we're done.
                    console.log("Looking for " + pageURL + "...");
                    if (PageExists(pageURL)) {
                        return pageURL;
                    } else {
                        // Since :group and :page were set,
                        // we know that if this file doesn't exist then there's no
                        // mistake about it: it's not physically present on the server.
                        go404();
                    }
                } else {
                    // One of the route parameters was not set. Most likely,
                    // it was the :page because someone is trying to
                    // access /#/page and not /#/group/page
                    if (angular.isUndefined($routeParams.page)) {
                        // If it is indeed the page that is undefined,
                        // then let's look to see if they are looking for
                        // the index file in a group
                        // (i.e., /#/academics -> /#/academics/index.html)

                        pageURL = 'views/pages' + pageGroup + '/index.html';

                        console.log("Looking for " + pageURL + "...");

                        if (PageExists(pageURL)) {
                            return pageURL; // We're done!
                        } else {
                            // The file /#/:group/index.html does not exist,
                            // so maybe they meant to access /#/:group.html
                            // For example: /#/academics -> /#/academics.html
                            pageURL = 'views/pages' + pageGroup + '.html';

                            console.log("Looking for " + pageURL + "...");
                            if (PageExists(pageURL)) {
                                return pageURL; // Finally done!
                            } else {
                                go404(); // Nothing else possible; return 404
                            }
                        }
                    } else {
                        // The only thing that could trigger this
                        // is if the $routeParams.group was undefined but the :page
                        // was not. That would be odd indeed.
                        // We'll throw a 404 error here for good measure.
                        go404();

                    }

                    go404();
                }
            }
        } // /return
    }

    return RouteLoader;
});