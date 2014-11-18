// Gulp
var gulp = require('gulp');

// Plugins
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var cache = require('gulp-cache');
var concat = require('gulp-concat');
var del = require('del');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var minifyCSS = require('gulp-minify-css');
var notify = require('gulp-notify'); // Requires Growl on Windows
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var sass = require('gulp-ruby-sass'); // Requires Ruby
var uglify = require('gulp-uglify');

// Define our Paths
var paths = {
	scripts: 'js/**/*.js',
	styles: 'sass/**/*.scss',
	fonts: 'sass/fonts/*',
	images: 'img/**/*.{png,jpg,jpeg,gif}'
};

var destPaths = {
	scripts: 'build/js',
	styles: 'build/css',
	fonts: 'build/fonts',
	images: 'build/img/'
};

// Error Handling
// Send error to notification center with gulp-notify
var handleErrors = function() {
	notify.onError({
		title: "Compile Error",
		message: "<%= error.message %>"
	}).apply(this, arguments);
	this.emit('end');
};

// Compile our SASS
gulp.task('styles', function() {
	return gulp.src(paths.styles)
		.pipe(plumber())
		.pipe(sass({sourcemap: true, sourcemapPath: paths.styles}))
		.pipe(autoprefixer())
		.pipe(gulp.dest(destPaths.styles))
		.pipe(notify('Styles task complete!'));
});

// Compile and Minify our SASS for Build
gulp.task('build-styles', function() {
	return gulp.src(paths.styles)
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest(destPaths.styles))
		.pipe(notify('Build styles task complete!'));
});


// Lint, Minify, and Concat our JS
gulp.task('scripts', function() {
	return gulp.src(paths.scripts)
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest(destPaths.scripts))
		.pipe(notify('Scripts tasks complete!'));
});

// Clean Images Folder
gulp.task('clean-images', function(cb) {
	del([destPaths.images], cb);
});

// Move Images to Build Folder
gulp.task('images', ['clean-images'], function() {
	return gulp.src(paths.images)
		.pipe(plumber())
		.pipe(gulp.dest(destPaths.images))
		.pipe(notify('Image optimized!'));
});

// Compress Images for Build
gulp.task('build-images', function() {
	return gulp.src(paths.images)
		.pipe(plumber())
		.pipe(imagemin({
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest(destPaths.images))
		.pipe(notify('Image optimized!'));
});

// Watch for changes made to files
gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.images, ['images'])
});

// Browser Sync - autoreload the browser
// Additional Settings: http://www.browsersync.io/docs/options/
gulp.task('browser-sync', function () {
	var files = [
		'**/*.html',
		'**/*.php',
		'build/css/style.css',
		'build/js/main.min.js',
		'build/img/**/*.{png,jpg,jpeg,gif}'
	];
	browserSync.init(files, {
		// server: {
		// 	baseDir: './'
		// },
		proxy: 'juice.github.dev', // Proxy for local dev sites
		port: 5555, // Sets the port in which to serve the site
		open: false, // Stops BS from opening a new browser window
		// ghostMode: { // Disable ghosting features (Useful when sharing a link for people to troubleshoot)
		// 	clicks: false,
		// 	location: false,
		// 	forms: false,
		// 	scroll: false
		// },
		logPrefix: "Juice" // Display a different prefix in the command line
	});
});

// Clean Build Folder
gulp.task('clean', function(cb) {
	del(['build'], cb);
});

// Clear the cache for everything
gulp.task('clear-cache', function() {
  cache.clearAll();
});

// Move Fonts to Build Folder
gulp.task('move-fonts', function() {
	gulp.src(paths.fonts)
	.pipe(gulp.dest(destPaths.fonts));
});

// Default Task
gulp.task('default', function(cb) {
	runSequence('clean', 'clear-cache', 'images', 'scripts', 'styles', 'move-fonts', 'browser-sync', 'watch', cb);
});

// Build Task
gulp.task('build', function(cb) {
	runSequence('clean', 'clear-cache', 'build-images', 'build-styles', 'scripts', 'move-fonts', cb);
});
