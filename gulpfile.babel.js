import gulp from 'gulp';
import webdriver from 'gulp-webdriver';

//Test task
//takes in a callback so the engine knows when the task's done
gulp.task('test', () => {
    return gulp.src('wdio.conf.js').pipe(webdriver());
});

// Watch Files For Changes
gulp.task('watch', () => {
    gulp.watch('./test/specs/*.js', ['test']);
});
