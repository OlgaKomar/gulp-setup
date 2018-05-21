var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concatCss = require('gulp-concat-css');

var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
});

// gulp.task('hello', function() {
//   console.log('Hello Zell');
// });

gulp.task('html', function(){
  return gulp.src('src/**/**.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('sass', function(){
  return gulp.src('src/**/**.scss')
    .pipe(sass())
    .pipe(concatCss('main.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

var jsFiles = 'src/**/*.js',
    jsDest = 'dist/js';

gulp.task('js', function() {
    return gulp.src(jsFiles)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('watch', ['browserSync', 'js', 'sass', 'html'], function(){
  gulp.watch('src/**/*.scss', ['sass']); 
  gulp.watch('src/**/*.js', ['js']); 
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.js', browserSync.reload);
});