const gulp = require('gulp');

gulp.task('hello', function() {
  console.log('Hello, Gulp!');
});

gulp.task('build', gulp.series('hello', function() {
  // Your build tasks go here
  console.log('Building...');
}));