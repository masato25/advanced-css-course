
'use strict';
/* global require */

// Define dependencies
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');

// Define file locations
var htmlFiles = [ './*.html' ],
    cssFiles = [ 'css/*.css' ];
    // jsFiles = [ 'app/js/**/*.js' ];

// Task for setting up webserver when working without backend
gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('_watch', function() {
  // Create LiveReload server
  var server = livereload({ start: true });
  livereload.listen();

  // Watch any files in dist/ for changes
  gulp.watch([].concat( htmlFiles, cssFiles )).on('change', function(file) {
    server.changed(file.path);
  });
});

// Watcher task when working WITHOUT backend
gulp.task('watch-server', gulp.series( 'connect', '_watch', () => {

}));

// Watcher task when working WITH backend
gulp.task('watch', gulp.series( '_watch', () => {

}));
