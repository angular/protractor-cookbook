'use strict';

var gulp = require('gulp');
var clangFormat = require('clang-format');
var gulpFormat = require('gulp-clang-format');
var runSequence = require('run-sequence');
var spawn = require('child_process').spawn;
var tslint = require('gulp-tslint');

var runSpawn = function(done, task, opt_arg, opt_io) {
  opt_arg = typeof opt_arg !== 'undefined' ? opt_arg : [];
  var stdio = 'inherit';
  if (opt_io === 'ignore') {
    stdio = 'ignore';
  }
  var child = spawn(task, opt_arg, {stdio: stdio});
  var running = false;
  child.on('close', function() {
    if (!running) {
      running = true;
      done();
    }
  });
  child.on('error', function() {
    if (!running) {
      console.error('gulp encountered a child error');
      running = true;
      done();
    }
  });
};

gulp.task('tslint', function() {
  return gulp.src([
      'protractor-typescript/**/*.ts',
      'tests/**/*.ts',
      '!**/node_modules/**/*.ts'])
    .pipe(tslint()).pipe(tslint.report());
});

gulp.task('lint', function(done) {
  runSequence('tslint', 'jshint', 'format:enforce', done);
});

gulp.task('jshint', function(done) {
  runSpawn(done, 'node', ['node_modules/jshint/bin/jshint', '-c', '.jshintrc',
      'jasmine-junit-reports',
      'protractor-javascript',
      '--exclude=**/node_modules/**/*.js'
  ]);
});

gulp.task('format:enforce', function() {
  var format = require('gulp-clang-format');
  var clangFormat = require('clang-format');
  return gulp.src(['lib/**/*.ts']).pipe(
    format.checkFormat('file', clangFormat, {verbose: true, fail: true}));
});

gulp.task('format', function() {
  var format = require('gulp-clang-format');
  var clangFormat = require('clang-format');
  return gulp.src(['lib/**/*.ts'], { base: '.' }).pipe(
    format.format('file', clangFormat)).pipe(gulp.dest('.'));
});
