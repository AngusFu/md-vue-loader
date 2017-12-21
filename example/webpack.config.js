module.exports = {
  entry: './src/index.js',
  output: {
    path: require('path').resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: [
          {
            loader: 'md-vue-loader',
            options: {
              // render demo apps in Shadow DOM
              shadow: false,
              // `prism` or `highlight.js`
              highlight: 'prism'
            }
          }
        ]
      }
    ]
  }
}
