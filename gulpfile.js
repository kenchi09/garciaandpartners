'use strict';

const gulp = require('gulp'),
      imagemin = require('gulp-imagemin');

function images() {
    return gulp
            .src('./assets/img/carousel/*')
            .pipe(imagemin())
            .pipe(gulp.dest('./assets/img/carousel'))
}

function watch() {
    gulp.watch('./assets/img/carousel/*', images);
}

const build = images;

exports.images = images;
exports.watch = watch;
exports.default = build;