const md2vue = require('md2vue')
const loaderUtils = require('loader-utils')

module.exports = function (content, map, meta) {
  var callback = this.async()
  var options = loaderUtils.getOptions(this) || {}

  md2vue(content, {
    target: 'js',
    componentName: 'default',
    shadow: !!options.shadow,
    highlight: options.highlight || 'highlight.js'
  })
  .then(content => {
    var ret = `module.exports = function() {
      ${content}
      return moduleExports;
    }.call({})`
    callback(null, ret, map, meta)
  })
  .catch(err => {
    callback(err)
  })
}
