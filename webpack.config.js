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
          presets: ['es2015', 'react','stage-0']
        }
      }
    ]
  },
  devServer: {
    contentBase: "./src",
    hot: true
  },
  resolve: {
    extentions: ['', '.js', '.jsx']
  }
};