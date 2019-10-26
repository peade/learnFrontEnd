const gulp = require('gulp')
const {series, parallel, src, dest, watch} = require('gulp')
const browserSync = require('browser-sync')
const proxyMiddleware = require('http-proxy-middleware')
const gulpsass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const eslint = require('gulp-eslint')
const babel = require('gulp-babel')
var changed = require('gulp-changed')
// const proxy = proxyMiddleware('/services', {target: 'http://localhost:8090', changeOrigin: true})
const proxy = proxyMiddleware('/services', {target: 'http://localhost:8080', changeOrigin: true})
const imgProxy = proxyMiddleware('/platformData', {target: 'http://localhost:8080', changeOrigin: true})
const reload = browserSync.reload

const scssTask = function () {
  return src(['./src/styles/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(gulpsass().on('error', gulpsass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(changed('./src/styles'))
    .pipe(dest('./src/styles'))
    .pipe(reload({stream: true}))
}
exports.scssTask = scssTask
const eslintTask = function () {
  return src(['./src/es6/**/*.js'])
    .pipe(eslint({quiet: true}))
    .pipe(eslint.format())
    // .pipe(eslint.failAfterError('failes'))
    .pipe(reload({stream: true}))
}
exports.eslintTask = eslintTask
const babelTask = function () {
  return src(['./src/es6/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./src/js'))
}
exports.babelTask = babelTask

const watchScss = function () {
  watch(['./src/styles/**/*.scss'], series(scssTask))
}
exports.watchScss = watchScss

const watchBabel = function () {
  watch(['./src/es6/**/*.js'], series(babelTask))
}
exports.watchBabel = watchBabel

const watchEslint = function () {
  watch(['./src/es6/**/*.js'], series(eslintTask))
}
exports.watchEslint = watchEslint

const htmlChange = function () {
  return src(['./src/pages/**/*.html'])
    .pipe(reload({stream: true}))
}
const watchHtml = function () {
  watch(['./src/pages/**/*.html'], htmlChange)
}
exports.watchHtml = watchHtml
const syncBrowser = function () {
  browserSync.init({
    server: {
      baseDir: './src',
      // baseDir: './build',
      index: 'pages/index.html',
      logLevel: 'silent',
      middleware: [proxy, imgProxy]
    },
    port: 3010
  })
}
exports.syncBrowser = syncBrowser

exports.server = parallel(syncBrowser, watchHtml, watchEslint, watchBabel, watchScss)