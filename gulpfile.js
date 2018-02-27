const gulp = require('gulp');
const pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');
const imageresize = require('gulp-image-resize');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('pug', function () {
  return gulp
    .src('./src/views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'));
});

gulp.task('scss', function () {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function () {
  return gulp
    .src('./src/js/*.js')
    .pipe(
      babel({
        presets: ['env']
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('images', function () {
  return gulp
    .src('./src/images/*')
    .pipe(
      imageresize({
        percentage: 50
      })
    )
    .pipe(
      imagemin([
        imagemin.jpegtran({
          progressive: true
        })
      ])
    )
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('watch', function () {
  gulp.watch('./src/js/*.js', ['js']);
  gulp.watch('./src/scss/*.scss', ['scss']);
  gulp.watch('./src/images/*', ['images']);
  gulp.watch('./src/views/*.pug', ['pug']);
});

gulp.task('default', ['pug', 'scss', 'js', 'images']);
