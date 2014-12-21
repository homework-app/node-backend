
var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify({ hello: 'world!' }));
});

var server = app.listen(process.env.PORT, function () {
});
