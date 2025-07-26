const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'blocks', 'test-block', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  externals: {
    '@wordpress/blocks': 'wp.blocks',
    '@wordpress/block-editor': 'wp.blockEditor',
    '@wordpress/components': 'wp.components',
    '@wordpress/element': 'wp.element'
  },

  mode: 'production'
};