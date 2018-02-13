// var googleHomeNotifier = require('./google-home-notifier');


function GoogleHome() {
    this.notificationStrategy = new EnableNotification();
}

GoogleHome.prototype = {
    setStrategy: function(notificationStrategy) {
        this.notificationStrategy = notificationStrategy;
    },

    handleNotification: function(message) {
        return this.notificationStrategy.handleNotification(message);
    }
}

function EnableNotification() {
    this.handleNotification = function(message) {
        // googleHomeNotifier.notify(message, function(res) {
        //     console.log(res);
        // });
    }
}

function UnableNotification() {
    this.handleNotification = function(message) {
        console.log('nie można');
    }
}

module.exports = UnableNotification;
module.exports = EnableNotification;
module.exports = GoogleHome;
