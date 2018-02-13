var express = require('express');
var serverError = require('./serverError');
var googleHome = require('./googleHome')();
var EnableNotification = require('./enableNotification');
var UnableNotification = require('./unableNotification');
var bodyParser = require('body-parser');
var app = express();

const serverPort = 8082;

app.use(bodyParser.json());

app.get('/notifications/on',  function (req, res) {
    console.log('request on /notifications/on');
    res.sendStatus(200);
    googleHome.setStrategy(new EnableNotification());
})

app.get('/notifications/off', function (req, res) {
    console.log('request on /notifications/off');
    res.sendStatus(200);
    googleHome.setStrategy(new UnableNotification());
})

app.post('/readmessage', function (req, res) {
    var result = serverError.isProperRequest(req);
    if (result.isProper) {
        console.log(req.body.message);
        googleHome.handleNotification(message);
        return res.sendStatus(200);
    } else {
        console.log('Wrong request');
        return res.status(result.serverError.getErrorCode()).send(result.serverError.getErrorMessage());
    }
})

app.listen(serverPort, function() {
    console.log('server start');
})
