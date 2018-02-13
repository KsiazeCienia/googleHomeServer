var EnableNotification = require('./enableNotification');
var UnableNotification = require('./unableNotification');

function GoogleHome() {
    // this.notificationStrategy = new EnableNotification();
    this.notificationStrategy = '';

    this.setStrategy = function (notificationStrategy) {
        // this.notificationStrategy = notificationStrategy;
        console.log(notificationStrategy);
    }

    // this.handleNotification = function (message) {
    //     this.notificationStrategy.handleNotification(message);
    // }
}

module.exports.GoogleHome = GoogleHome;
//
// var Shipping = function() {
//     this.company = "";
// };
//
// Shipping.prototype = {
//     setStrategy: function(company) {
//         this.company = company;
//     },
//
//     calculate: function(package) {
//         return this.company.calculate(package);
//     }
// };
//
// var UPS = function() {
//     this.calculate = function(package) {
//         // calculations...
//         return "$45.95";
//     }
// };
//
// var USPS = function() {
//     this.calculate = function(package) {
//         // calculations...
//         return "$39.40";
//     }
// };
//
// var Fedex = function() {
//     this.calculate = function(package) {
//         // calculations...
//         return "$43.20";
//     }
// };
//
// module.exports.Shipping = Shipping;
// module.exports.UPS = UPS;
// // module.exports.handleNotification = handleNotification;
// // module.exports.enableNotification = enableNotification;
// // module.exports.unableNotification = unableNotification;
