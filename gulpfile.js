var
  gulp = require('gulp'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  babelify = require('babelify');

gulp.task('build', function () {
  browserify('./src/index.js')
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.js', ['build']);
});

gulp.task('default', ['build', 'watch']);