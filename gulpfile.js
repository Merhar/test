// Подключение пакетов
var 
		gulp 															= require('gulp'),
		browserSync 											= require('browser-sync').create(),
		sass															= require('gulp-sass'),
		notify 														= require('gulp-notify'),
		plumber 													= require('gulp-plumber'),
		autoprefixer											= require('gulp-autoprefixer'),
		sourcemaps												= require('gulp-sourcemaps'),
		del																= require('del'),
		runSequence												= require('run-sequence'),
		imagemin													=	require('gulp-imagemin'),
		cleanCss													= require('gulp-clean-css');


// Задачи для GULP

gulp.task('clean:build', function() {
	return del('./build');
});


//  Слежение за изменениями файлов
gulp.task('server', function() {
	browserSync.init({
		server : {baseDir: './build/'}
	});

	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/sass/**/*.sass', ['sass']);
	gulp.watch('src/js/**/*.js', ['copy:js']);
	gulp.watch('src/fonts/**/*.*', ['copy:fonts']);
	gulp.watch('src/img/*', ['copy:img']);
});


gulp.task('copy:js', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
});
gulp.task('copy:libs', function() {
	return gulp.src('src/libs/**/*.*')
		.pipe(gulp.dest('./build/libs'))
		.pipe(browserSync.stream());
});
gulp.task('copy:fonts', function() {
	return gulp.src('src/fonts/**/*.*')
		.pipe(gulp.dest('./build/fonts'))
		.pipe(browserSync.stream());
});
gulp.task('copy:img', function() {
	return gulp.src('src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./build/img'))
		.pipe(browserSync.stream());
});

// Html
gulp.task('html', function() {

	return gulp.src('src/**/*.html')
	.pipe(gulp.dest('./build'))
	.pipe(browserSync.stream());
});

// Компилятор SASS
gulp.task('sass', function() {

	return gulp.src('./src/sass/main.sass')
		.pipe( plumber({
			errorHandler: notify.onError(function(err){
				return {
					title: 'Styles',
					message: err.message
				}
			})
		}))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		}))
		.pipe(cleanCss({level: 2}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./build/css'))
		.pipe(browserSync.stream());
});




// Главный запуск Gulp
gulp.task('default', function(callback){
	runSequence(
		'clean:build',
		['sass', 'html', 'copy:js', 'copy:libs', 'copy:fonts', 'copy:img' ],
		'server',
		callback
	)
});