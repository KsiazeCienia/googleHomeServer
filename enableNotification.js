var googlehome = require('./google-home-notifier');
var deviceName = 'Google Home';
var ip = '192.168.0.241';

function EnableNotification() {
    this.handleNotification = function(message) {
        googlehome.ip(ip, 'pl');
        googlehome.notify(message, function(notifyRes) {
          console.log(notifyRes);
          // res.send(deviceName + ' will say: ' + text + '\n');
        });
        console.log('notyfikacja wysłana');
    }
}

module.exports = EnableNotification;
