/**
 * @fileOverview jsx to wxml core
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2019-04-02 | sizhao  // 初始版本
*/

const path = require('path')
const t = require('@babel/types')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default
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

    // parse jsx to ast
    const { contents: jsxCode } = file
    const ast = parser.parse(jsxCode.toString(), {
      sourceType: 'module',
      plugins: [
        'jsx'
      ]
    })

    // transform
    traverse(ast, {
      JSXExpressionContainer (path) {
        const isJSXElement = t.isJSXElement(path.parent)

        if (isJSXElement) {
          const opening = t.jsxOpeningElement('')
          const blockElement = t.jsxElement()

        }
      }
    })

    // generate target code
    const wxml = generator(ast).code

    file.contents = Buffer.from(wxml, 'utf8')
    file.path = path.join(dirname, `${filename}.wxml`)
    callback(null, file)
  })
}
