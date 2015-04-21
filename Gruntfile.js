var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./public/stylesheets/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./stylesheets'));
});