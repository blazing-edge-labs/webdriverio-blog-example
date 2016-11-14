import gulp from 'gulp';
import webdriver from 'gulp-webdriver';
import selenium from 'selenium-standalone';
import wdio from 'gulp-wdio';

gulp.task('test', () => {
   return gulp.src('wdio.conf.js').pipe(webdriver());
});
