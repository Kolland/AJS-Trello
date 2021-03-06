var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// need to sass
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');

var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');

// 1.browserSync
// 2.minify-js
// 3.minify-css
// 4.sass
// 5.svg-o
// 6.svgstore
// 7.watch
// 7.run server

// browserSync
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

// uglify js
gulp.task('minify-js', function(next) {
  pump([
    gulp.src('src/lib/*.js'),
    uglify(),
    rename({ suffix: '.min' }), // add .min suffix
    gulp.dest('dist/js')
  ], next);
});

// minify css
gulp.task('minify-css', function() {
  return gulp.src(['src/lib/*.css', '!src/lib/*.min.css'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ suffix: '.min' })) // add .min suffix
    .pipe(gulp.dest('dist/css'));
});

// sass
gulp.task('sass', function() {
  return gulp.src('./src/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', function(err) {
      return notify().write(err);
    }))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions'],
      cascade: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream()); // inject css
});

// svg opimization
gulp.task('svg-o', function() {
  return gulp
    .src('src/svg/*.svg')
    .pipe(svgmin({
      js2svg: {
        pretty: true
      },
      removeDoctype: false
    }))
    .pipe(gulp.dest('dist/img/'));
});

// svg sprite
gulp.task('svgstore', function() {
  return gulp
    .src('src/svg/sprite/*.svg')
    .pipe(svgmin({
      removeDoctype: false
    }))
    .pipe(svgstore())
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(gulp.dest('dist/img/'));
});

// watcher
gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
  gulp.watch('src/sass/*.scss', ['sass']);
  // gulp.watch(['src/pages/**/*.html', 'src/templates/**/*.html'], ['nunjucks']);
  gulp.watch(['dist/js/**/*.js']).on('change', browserSync.reload);
  gulp.watch(['dist/**/*.html']).on('change', browserSync.reload);
});

// run
gulp.task('run', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
});
