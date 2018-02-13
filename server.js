var express = require('express');
var googleHome = require('./googleHome').GoogleHome;
var EnableNotification = require('./enableNotification');
var UnableNotification = require('./unableNotification');
var app = express();

// var googleHome = new GoogleHome();

const serverPort = 8910;

app.get('/notifications/on',  function (req, res) {
    console.log('cipka');
    // googleHome.setStrategy(new UnableNotification());
    // googleHome.handleNotification('sss');
})

app.listen(serverPort, function() {
    console.log('leci');
    googleHome.setStrategy('poszlo');
    // googleHome.setStrategy(new UnableNotification());
    // googleHome.handleNotification('sss');

})
