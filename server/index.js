'use strict'

const express = require('express')
const app = express()
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('../webpack.config')
const compiler = webpack(webpackConfig)

const config = require('./config')()

app.set('view engine', 'jade')

app.use('/public', express.static('./public/images'))

app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
	stats: {colors: true}
}))

module.exports = app

require('./controllers')

app.listen(config.port, function(){
	console.log('Express server listening on port ' + config.port);
})