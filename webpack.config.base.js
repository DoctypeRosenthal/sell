'use strict';

module.exports = {
  module: {
    loaders: [
      { 
      	test: /\.js$/, 
      	loaders: ['babel-loader'], 
      	exclude: /node_modules/ 
      },
      
	  // LESS
	  {
	    test: /\.less$/,
	    loader: 'style!css!less'
	  },

	  // SASS
	  {
	    test: /\.scss$/,
	    loader: 'style!css!sass'
	  }
    ]
  },
  output: {
    library: 'Redux',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js']
  }
};
