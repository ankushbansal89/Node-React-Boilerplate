import express from 'express';
import webpack from 'webpack';
import config from '../../webpack.config';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';

const app = express();
app.use('/', express.static('public'));

const compiler = webpack(config);

app.use(WebpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath,
}));

app.use(WebpackHotMiddleware(compiler, {
	log: console.log,
}));

app.listen(3000, function() {
	console.log('listening on 3000');
});