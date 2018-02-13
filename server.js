var express = require('express');
var BadRequest = require('./serverError').BadRequest;
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

    var emptyBody = new BadRequest();
    return emptyBody.handle(req, res);

    // if (!req.body) return res.status(400).send('Body can not be empty');
    console.log(req.body.message);
    var message = req.body.message;

    if (message) {
        googleHome.handleNotification(message);
        return res.sendStatus(200);
    } else {
        return res.status(400).send('Request has to contain \'message\' key');
    }
})

app.listen(serverPort, function() {
    console.log('server start');
})
