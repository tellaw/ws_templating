var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('web/scss/**/*.scss')
	.pipe(sass())
    .pipe(gulp.dest('web/css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['web/scss/**/*.scss'], ['sass']);
});
