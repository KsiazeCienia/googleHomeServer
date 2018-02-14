var Client                = require('castv2-client').Client;
var DefaultMediaReceiver  = require('castv2-client').DefaultMediaReceiver;
var mdns                  = require('mdns');
var browser = mdns.createBrowser(mdns.tcp('googlecast'));
var googleTTS = require('google-tts-api');

const LANGUAGE = 'uk';

function GoogleHomeNotifier(ip) {
    this.ip = ip;

    this.notify = function(message, callback) {
        getSpeechUrl(message, function(url){
            console.log(url);
            onDeviceUp(ip, url, function(res){
                callback(res);
            })
        })
    }

    var getSpeechUrl = function(message, callback) {
        googleTTS(message, LANGUAGE, 1)
            .then(function (url) {
                callback(url);
            })
            .catch(function (err) {
                console.error(err.stack);
            });
    }

    var onDeviceUp = function(host, url, callback) {
        var client = new Client();
        client.connect(host, function() {
            client.launch(DefaultMediaReceiver, function(err, player) {
                var media = {
                    contentId: url,
                    contentType: 'audio/mp3',
                    streamType: 'BUFFERED',
                }
                player.load(media, { autoplay: true }, function(err, status) {
                    client.close();
                    callback('Device notified');
                });
            });
        });

        client.on('error', function(err) {
        console.log('Error: %s', err.message);
        client.close();
        callback(err);
        });
    }
}


module.exports = GoogleHomeNotifier;
