const gulp = require('gulp')
const browserSync = require('browser-sync')
const proxyMiddleware = require('http-proxy-middleware')
const gulpsass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const eslint = require('gulp-eslint')
var changed = require('gulp-changed')
// const proxy = proxyMiddleware('/services', {target: 'http://localhost:8090', changeOrigin: true})
const proxy = proxyMiddleware('/services', {target: 'http://localhost:8080', changeOrigin: true})
const imgProxy = proxyMiddleware('/platformData', {target: 'http://localhost:8080', changeOrigin: true})
const reload = browserSync.reload
gulp.task('scss', function () {
  return gulp.src(['./src/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(gulpsass().on('error', gulpsass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 1%', 'Android >= 4.0'],
      cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(changed('./src'))
    .pipe(gulp.dest('./src'))
    .pipe(reload({stream: true}))
})
gulp.task('eslint', function () {
  return gulp.src(['./src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    // .pipe(eslint.failAfterError('failes'))
    // .pipe(changed())
    // .pipe(gulp.dest('./app'))
    .pipe(reload({stream: true}))
})
gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: './src',
      // baseDir: './build',
      index: 'index.htm',
      logLevel: 'silent',
      middleware: [proxy, imgProxy]
    },
    port: 3010
  })
  // gulp.watch(['app/views/**/*.scss',], ['scss'])
  gulp.watch(['./src/**/*.js'], ['eslint'])
  gulp.watch(['./src/**/*.scss'], ['scss'])
  gulp.watch(['./src/**/*.html']).on('change', reload)
})
