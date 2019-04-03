/**
 * @fileOverview gulpfile
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2019-04-03 | sizhao  // 初始版本
*/

const gulp = require('gulp')

const jsx2wxml = require('./src/index')

gulp.task('default', (done) => {
  gulp.src('test/**/*.jsx')
    .pipe(jsx2wxml())
    .pipe(gulp.dest('test'))

  done()
})
