var Vue = require('vue/dist/vue.common')
var Page = require('./test.md')

// eslint-disable-next-line
new Vue({
  el: '#app',
  components: {
    'my-page': Page
  },
  render: function (h) {
    return h('my-page')
  },
  mounted: function () {
    var selector = '.vue-demo-block > pre'
    var pres = this.$el.querySelectorAll(selector)
    Array.from(pres).forEach(function (pre) {
      var id = 'vue-demo-' + Math.random()
      var div = document.createElement('div')
      div.innerHTML = '<input type="checkbox" /><label></label>'
      div.children[0].id = id
      div.children[1].setAttribute('for', id)
      pre.parentNode.insertBefore(div.children[1], pre)
      pre.parentNode.insertBefore(div.children[0], pre)
    })
  }
})
