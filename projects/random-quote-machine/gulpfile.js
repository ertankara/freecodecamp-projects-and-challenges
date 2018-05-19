const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const jshint = require('gulp-jshint');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();


gulp.task('transpile-minify', function() {
  gulp.src(['js/lib/*.js', 'js/app.js'])
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(concat('production.min.js'))
    .pipe(gulp.dest('./dist/js/'));
});


gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css/'));
});


gulp.task('copy', function() {
  gulp.src('index.html')
    .pipe(gulp.dest('dist/'));
});


gulp.task('lint', function() {
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('fail'));
});


gulp.task('default', ['lint', 'minify-css', 'transpile-minify', 'copy'], function() {
  gulp.watch('js/*.js', ['lint', 'transpile-minify']);
  gulp.watch('index.html', ['copy']);
  gulp.watch('css/*.css', ['minify-css']);
  gulp.watch(['js/*.js', 'index.html', 'css/*.css']).on('change', browserSync.reload);

  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});
