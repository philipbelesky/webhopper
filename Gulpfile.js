var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

// Compile CSS files and output for distribution and the library
gulp.task('styles', function() {
  gulp.src(['./sass/webhopper.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/'))
  gulp.src(['./sass/webhopper_patterns.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('library/app/css/'))
});

// Setup the development server with live reloading
gulp.task('connect', function() {
  connect.server({
    root: 'library',
    livereload: true
  });
});

// Force a refresh of the development server
gulp.task('reload', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

// Automatically monitor, compile, and refresh any changes
gulp.task('watch', function() {
  // Watch SASS directory and auto compile changes
  gulp.watch('./sass/**/*.scss', ['styles'])
  // Watch library directory for changes to source
  gulp.watch('./library/**/*.*', ['reload']);
});

// Default task to perform all of the above when gulp cmd is issued
gulp.task('default', ['styles', 'connect', 'watch']);