var gulp = require('gulp'),
	scss = require('gulp-sass'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'),
	cssmin = require('cssmin'),
	browserSync = require('browser-sync');

var paths = {
	dev: 'src/shield.scss',
	watch_scss: 'src/*.scss',
	watch_html: '*.html',
	out: 'main.css'
};

gulp.task('build', function() {
	browserSync.init({
		server: {
			baseDir: './'
		},
		open: false
	});
});

gulp.task('rebuild', function() {
	browserSync.reload();
});

gulp.task('css', function() {
	gulp.src(paths.dev)
		.pipe(plumber())
		.pipe(scss())
		.pipe(gulp.dest(paths.out))
		.pipe(browserSync.reload({stream: true}));
});

function runner() {
	gulp.watch(paths.watch_scss, ['css']);
	gulp.watch(paths.watch_html, ['rebuild']);
}

gulp.task('default', ['css', 'build'], runner);