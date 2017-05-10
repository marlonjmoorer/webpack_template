var path = require('path');
var webpack = require('webpack');
const config = {

  // Gives you sourcemaps without slowing down rebundling
    devtool: 'eval-source-map',
    entry: [
        'webpack/hot/dev-server'  ,
        'webpack-hot-middleware/client',  
        path.resolve(__dirname, 'client','main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'public','build'),
        filename: 'bundle.js',
        publicPath:'http://localhost:3000/build'
    },
    plugins:[new webpack.HotModuleReplacementPlugin()],
    module: {
        loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
        }]
    }
};

module.exports = config;