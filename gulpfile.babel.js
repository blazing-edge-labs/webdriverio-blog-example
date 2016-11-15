import gulp from 'gulp';
import webdriver from 'gulp-webdriver';

gulp.task('test', () => {
   return gulp.src('wdio.conf.js').pipe(webdriver());
});
