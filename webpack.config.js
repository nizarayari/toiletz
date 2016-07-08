module.exports = {
	  entry: [   // where you render the main APP
	    './client/components/app.js'
	  ],
	  output: {
	    filename: 'bundle.js',
	    path: __dirname + '/client/compiled'//where it's gonna render the bundle.js file
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