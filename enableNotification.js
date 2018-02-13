var googlehome = require('./google-home-notifier');
var deviceName = 'Google Home';
var ip = '192.168.0.214';

function EnableNotification() {
    this.handleNotification = function(message) {
        googlehome.ip(ip, 'pl');
        googlehome.notify(text, function(notifyRes) {
          console.log(notifyRes);
          res.send(deviceName + ' will say: ' + text + '\n');
        });
        console.log('notyfikacja wysłana');
    }
}

module.exports = EnableNotification;
