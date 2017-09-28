var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var app = [
	path.join(__dirname, './src/index.js')
];

var publicPath = '/dist/';

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: app,
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "bundle.js",
        publicPath: publicPath
	},
	module: {
        loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules|dist/,
				loader: 'babel-loader',
				
			},
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({fallback:'style-loader', loader:`css-loader!less-loader?{"sourceMap":true}`, publicPath: './'})
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            }
        ],
    },
    devServer: {
	    historyApiFallback: true,
	    inline: true,
	    port: '9000'
    },
    plugins: [
	    new webpack.NoEmitOnErrorsPlugin(),
		new ExtractTextPlugin("[name].css")
	]
}