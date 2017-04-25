// configure sever 
import  express from 'express';
import  path from 'path';
import  open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();

// configure weback
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: config.output.publicPath
}));

// route
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// tell express to listen on the port
app.listen(port, function(err){
    if(err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});