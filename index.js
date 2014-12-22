
var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify({ hello: 'world!', data: [ 1, 2, 3 ] }));
});

var server = app.listen(process.env.PORT, function () {
});
