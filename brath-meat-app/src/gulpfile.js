'use strict';
var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
sass.compiler = require('node-sass');

gulp.task('sass', function () {

   return gulp.src('./scss/**/*.scss')
   .pipe(concat('main.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css'));
});