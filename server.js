var express = require('express');
var GoogleHome = require('./googleHome');
var EnableNotification = require('./enableNotification');
var UnableNotification = require('./unableNotification');
var app = express();

var googleHome = new GoogleHome();

const serverPort = 8099;

app.get('/notifications/on',  function (req, res) {
    console.log('cipka');
    googleHome.setStrategy(new UnableNotification());
})

app.listen(serverPort, function() {
    console.log('leci');
})
