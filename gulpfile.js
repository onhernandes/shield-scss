var gulp = require('gulp'),
	sass = require('gulp-sass'),
	bs = require('browser-sync');

var basePath = './',
	dev = {
		sass: [basePath + 'dev/*.scss', basePath + 'dev/**/*.scss', basePath + 'dev/**/**/*.scss', basePath + 'dist/*.scss', basePath + 'dist/**/*.scss', basePath + 'dist/**/**/*.scss', basePath + 'dist/**/**/**/*.scss'],
		main: basePath + 'dev/main.scss',
		js: [basePath + 'dev/*.js', basePath + 'dev/**/*.js', basePath + 'dev/**/**/*.js'],
		html: basePath + '*.html'
	},
	assets = {
		dist: basePath + 'dist/',
		site: basePath + 'assets/'
	};

gulp.task('styles', function() {
    gulp.src(dev.main)
    	.pipe(sass({}))
    	.pipe(gulp.dest(assets.site))
    	.pipe(bs.stream());
});

gulp.task('server', function() {
    bs.init({
    	open: false,
    	server: {
    		baseDir: basePath
    	}
    });

    gulp.watch(dev.sass, ['styles']);
    gulp.watch(dev.html).on('change', function() {
    	bs.reload();
    });
});

gulp.task('default', ['styles', 'server']);