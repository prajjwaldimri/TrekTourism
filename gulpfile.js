const gulp = require('gulp');
const changed = require('gulp-changed');
const uglify = require('gulp-uglify');
const pump = require('pump');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');

// Minify JS
gulp.task('uglify-js', function (cb) {
  pump(
    [
      gulp.src('source/js/*.js'),
      changed('public/js/'),
      uglify(),
      gulp.dest('public/js')
    ],
    cb
  );
});

// Convert Sass to CSS and minify CSS
gulp.task('uglify-sass', function (cb) {
  pump(
    [
      gulp.src('source/sass/*.scss'),
      changed('public/css'),
      sass(),
      minifyCSS(),
      gulp.dest('public/css')
    ],
    cb
  );
});

gulp.task('watch', function () {
  gulp.watch('source/js/*.js', ['uglify-js']);
  gulp.watch('source/sass/*.sass', ['uglify-sass']);
  gulp.watch('source/views/*.html', ['uglify-html']);
});
