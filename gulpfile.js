var gulp = require('gulp'),
	scss = require('gulp-sass'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'),
	cssmin = require('cssmin'),
	browserSync = require('browser-sync');

var base = '',
	devBase = base + 'src',
	paths = {
		dev: './dev/main.scss',
		watch_scss: ['./dev/*.scss', './dev/**/*.scss', './dev/**/**/*.scss'],
		watch_html: './*.html',
		out: './assets'
};

gulp.task('build', function() {
	browserSync.init({
		server: true,
		open: false
	});
});

gulp.task('rebuild', function() {
	browserSync.reload();
});

gulp.task('styles', function() {
    gulp.src(paths.dev)
    	.pipe(plumber())
        .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
        .pipe(rename('main.css'))
        .pipe(gulp.dest(paths.out));
});

//Watch task
gulp.task('default', ['styles', 'build'], function() {
		gulp.watch(paths.watch_scss, ['style']);
		gulp.watch(paths.watch_html, ['rebuild']);
});