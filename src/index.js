/**
 * @fileOverview jsx to wxml core
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2019-04-02 | sizhao  // 初始版本
*/

const path = require('path')
const babelCore = require('@babel/core')
const t = require('@babel/types')
const traverse = require('@babel/traverse')
const generator = require('@babel/generator')
const parser = require('@babel/parser')
const template = require('@babel/template')
const html = require('html')
const through = require('through2')

module.exports = function (options = {}) {
  return through.obj((file, encoding, callback) => {
    if (file.isNull()) {
      callback(null, file)
    }

    const filename = path.basename(file.path, '.jsx')
    const dirname = path.dirname(file.path)

    file.contents = Buffer.from('<view>Hello, jsx to wxml.</view>', 'utf8')
    file.path = path.join(dirname, `${filename}.wxml`)
    callback(null, file)
  })
}
