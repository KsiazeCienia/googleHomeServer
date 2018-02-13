var Client                = require('castv2-client').Client;
var DefaultMediaReceiver  = require('castv2-client').DefaultMediaReceiver;
var mdns                  = require('mdns');
var browser = mdns.createBrowser(mdns.tcp('googlecast'));
var googleTTS = require('google-tts-api');

const LANGUAGE = 'us';

function GoogleHomeNotifier(ip) {
    this.ip = ip;

    var notify = function(message, callback) {
        getSpeechUrl(message, function(res){
            callback(res);
        })
    }

    var getSpeechUrl = function(message, callback) {
        googleTTS(message, LANGUAGE, 1)
            .then(function (url) {
                console.log(url);
                callback(url);
            })
            .catch(function (err) {
                console.error(err.stack);
            });
    }
}

var g = new GoogleHomeNotifier('13.23.321.1');
g.notify('cipka', function(res) {
    console.log(res);
});
