var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');

var app = express();

var api = require('./server/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Load web page statically (js, css, html)
app.use(express.static(path.join(__dirname, 'dist')));

//Load api that is dinamyc
app.use('/', api);

//Always load index.html????
app.get('*'), (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Started to listen to ${port}`);
})