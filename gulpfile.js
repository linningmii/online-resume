var
  gulp = require('gulp'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  babelify = require('babelify'),
  sass = require('gulp-sass');

gulp.task('build', function () {
  browserify('./src/index.js')
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'));

  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
});

gulp.task('style', function () {
  gulp.src('src/style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.js', ['build']);
  gulp.watch('./src/**/*.html', ['build']);
  gulp.watch('./src/**/*.scss', ['style']);
});

gulp.task('default', ['build', 'style', 'watch']);