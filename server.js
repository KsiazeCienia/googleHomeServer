var express = require('express');
var googleHome = require('./googleHome')();
var EnableNotification = require('./enableNotification');
var UnableNotification = require('./unableNotification');
var app = express();

// var googleHome = new GoogleHome();

const serverPort = 8914;

app.get('/notifications/on',  function (req, res) {
    console.log('request on /notifications/on');
    googleHome.setStrategy(new EnableNotification());
})

app.listen(serverPort, function() {
    console.log('server start');
})
