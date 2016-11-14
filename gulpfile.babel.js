import gulp from 'gulp';
import webdriver from 'gulp-webdriver';
import selenium from 'selenium-standalone';

gulp.task('test', () => {
   return gulp.src('wdio.conf.js').pipe(webdriver());
});
