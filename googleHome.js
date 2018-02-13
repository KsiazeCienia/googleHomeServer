var EnableNotification = require('./enableNotification');
var UnableNotification = require('./unableNotification');

function GoogleHome() {
    this.notificationStrategy = new EnableNotification();

    this.setStrategy = function (notificationStrategy) {
        this.notificationStrategy = notificationStrategy;
        console.log(notificationStrategy);
    }

    this.handleNotification = function (message) {
        this.notificationStrategy.handleNotification(message);
    }
}

// var g = new GoogleHome();
// g.setStrategy(new UnableNotification());
// g.handleNotification('s');

module.exports = function () {
    return new GoogleHome();
}
