var through = require('through')
var md2vue = require('md2vue')

module.exports = function mdvueify (file, options) {
  if (!/.md$/.test(file)) {
    return through()
  }
  console.log(options)

  var data = ''
  var stream = through(write, end)
  stream.mdvueify = true

  function write (buf) {
    data += buf
  }

  function end () {
    stream.emit('file', file)

    var id = 1333
    var customMarkups = () => {
      var uid = 'vue-demo-' + (id++)
      return '<input id="' + uid +'" type="checkbox" /><label for="' + uid +'"></label>'
    }
    
    md2vue(data, {
      target: 'js',
      highlight: 'prism',
      componentName: 'xxx',
      customMarkups: customMarkups
    })
    .then(function (result) {
      stream.queue(result)
      stream.queue(null)
    })
    .catch(function (error) {
      stream.emit('error', error)
      console.error(error.stack.replace(/^.*?\n/, ''))
    })
  }

  return stream
}