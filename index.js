const md2vue = require('md2vue')
const loaderUtils = require('loader-utils')

module.exports = function (content, map, meta) {
  const callback = this.async()
  const options = loaderUtils.getOptions(this) || {}

  md2vue(content, {
    name: 'default',
    target: 'js',
    inject: '',
    highlight: options.highlight || 'highlight.js'
  })
  .then(
    content => callback(null, content, map, meta),
    err => callback(err)
  )
}
