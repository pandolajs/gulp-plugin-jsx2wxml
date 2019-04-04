/**
 * @fileOverview block element generator
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2019-04-03 | sizhao  // 初始版本
*/

const t = require('@babel/types')

class Block {
  // 创建开标签
  openingElement (attrs = []) {
    const jsxAttrs = attrs.map(({ key, value }) => {

      const ikey = t.jsxIdentifier(key)
      return t.jsxAttribute(ikey, value)
    })
  }

  singleIf ({ test, body } = {}) {

  }
}

module.exports = new Block()
