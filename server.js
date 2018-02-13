var express = require('express');
var GoogleHome = require('./googleHome');
var app = express();

var googleHome = new GoogleHome();

const serverPort = 8098;

app.get('/notifications/on',  function (req, res) {
    console.log('cipka');
    var notifica = new UnableNotification()
    googleHome.setStrategy(notifica);
})

app.listen(serverPort, function() {
    console.log('leci');
})
