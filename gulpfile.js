let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify');
let pump = require('pump');
let imagemin = require('gulp-imagemin');

gulp.task('css-minfier', function () {
  return gulp
    .src('source/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('public/css'));
});

gulp.task('js-minfier', function () {
  pump([gulp.src('source/js/*.js'), uglify(), gulp.dest('public/js')], () => {
    console.log('Minifed Js');
  });
});

gulp.task('img-minfier', function () {
  gulp
    .src('source/img/*')
    .pipe(
      imagemin([
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 })
      ])
    )
    .pipe(gulp.dest('public/img'));
});

// Watch Files For Changes
gulp.task('watch', function () {
  gulp.watch('source/js/*.js', ['js-minfier']);
  gulp.watch('source/css/*.css', ['css-minfier']);
  gulp.watch('source/img/*', ['img-minfier']);
});

gulp.task('default', ['css-minfier', 'js-minfier', 'img-minfier']);
