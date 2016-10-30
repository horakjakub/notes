var gulp = require('gulp'),
  	connect = require('gulp-connect'),
  	concat = require('gulp-concat'),
    sass = require('gulp-sass');
 
gulp.task('connect', function() {
  	connect.server({
        root: '',
        livereload: true,
        port: 8181
    });
});

gulp.task('watch', function() {
    gulp.watch(['src/**/*.js'], function(event) {
		gulp.src(['./lib/libs.js', './src/**/*.js'])
		    .pipe(concat('all.js'))
		    .pipe(gulp.dest('./dist/'));
    });
});

 
gulp.task('sass', function () {
  gulp.src('./styles/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./styles/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['connect', 'watch', 'sass']);