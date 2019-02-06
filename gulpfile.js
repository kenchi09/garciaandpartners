const gulp = require('gulp'),
      imagemin = require('gulp-imagemin');

gulp.task('image', function () {
    return gulp.src('assets/img/carousel/*')
               .pipe(imagemin())
               .pipe(gulp.dest('assets/img/carousel'));
});