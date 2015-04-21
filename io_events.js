/**
 * Created by Administrator on 15/4/20.
 */

/**
 *
 * @param Server socketIo
 */
var ioEvents = function (socketIo) {
    socketIo.on('connection', onConnection);

    socketIo.on('user chat', onChat);

    //socketIo.on('')
};

function onConnection(socket) {
    console.log('a user connected');
}

function onChat(message) {
    console.log(arguments);
}

module.exports = ioEvents;