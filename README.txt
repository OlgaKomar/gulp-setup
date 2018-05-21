npm install gulp -g
npm init
npm install gulp --save-dev
gulp.task('task-name', function() {
  // Stuff here
});

gulp.task('task-name', function () {
  return gulp.src('source-files') // Get source files with gulp.src
    .pipe(aGulpPlugin()) // Sends it through a gulp plugin
    .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
})

npm install gulp-sass --save-dev

// Gulp watch syntax
gulp.watch('files-to-watch', ['tasks', 'to', 'run']); 

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
})

npm install gulp-concat gulp-rename gulp-uglify --save-dev