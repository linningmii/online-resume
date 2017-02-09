var
  gulp = require('gulp'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  babelify = require('babelify'),
  sass = require('gulp-sass'),
  stringify = require('stringify'),
  connect = require('gulp-connect');

gulp.task('html', function () {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('style', function () {
  gulp.src('src/style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('js', function () {
  browserify('./src/index.js')
    .transform(stringify, {
      appliesTo: {
        includeExtensions: ['.html']
      }
    })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.js', ['js']);
  gulp.watch('./src/**/*.html', ['html']);
  gulp.watch('./src/**/*.scss', ['style']);
});

gulp.task('server', function () {
  connect.server({
    livereload: true,
    port: 9999,
    root: './dist'
  });
});

gulp.task('default', ['html', 'style', 'js', 'watch', 'server']);