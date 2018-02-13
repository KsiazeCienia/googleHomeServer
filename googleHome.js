var EnableNotification = require('./enableNotification');
var UnableNotification = require('./unableNotification');

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

module.exports = GoogleHome;
