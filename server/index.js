var express = require('express');
var path = require('path');
var app = express();
var webpack = require ('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')  
var webpackHotMiddleware = require('webpack-hot-middleware')  
var config = require ('../webpack.config')
var compiler = webpack(config)   

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname,'..',"public");

app.use(webpackDevMiddleware(compiler, {  
    publicPath: config.output.publicPath,  
    stats: {colors: true}  
}))
app.use(webpackHotMiddleware(compiler, {  
    log: console.log 
})) 

// We point to our static assets
app.use(express.static(publicPath));

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});