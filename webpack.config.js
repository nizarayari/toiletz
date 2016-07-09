module.exports = {
  entry: [
    './src/index.js'
  ],
   output: {
    filename: 'bundle.js',
    path: __dirname + '/src/compiled'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extentions: ['', '.js', '.jsx']
  }
};