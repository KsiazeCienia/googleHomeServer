var GoogleHomeNotifier = require('./googleHomeNotifier');
const IP = '192.168.0.241';

function EnableNotification() {
    this.handleNotification = function(message) {
        var googleHM = new GoogleHomeNotifier(IP);
        googleHM.notify(message, function(notifyRes) {
          console.log(notifyRes);
        });
        console.log('notyfikacja wysłana');
    }
}

module.exports = EnableNotification;
