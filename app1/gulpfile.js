var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass', function () {
  return gulp.src('./sass/app.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./sass/app.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);