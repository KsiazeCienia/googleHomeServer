var inherits = require('util').inherits;

// var Result = {
//     isProper = True;
//     serverError = null;
// }

function ServerError () {
    this.successor = null;
}

ServerError.prototype.setSuccessor = function (successor) {
    this.successor = successor;
}

ServerError.prototype.handle = function (req, res) {
    return this.successor.handle(req, res);
}

function EmptyBody() {
    ServerError.call(this);
}
inherits(EmptyBody, ServerError);

EmptyBody.prototype.handle = function (req, res) {
    if (!req.body) {
        return res.status(400).send('Body can not be empty');
    } else {
        // return Result.isProper = True;
        return this.successor.handle(req, res);
    }
}

function BadRequest() {
    ServerError.call(this);
}
inherits(BadRequest, ServerError);

BadRequest.prototype.handle = function (req, res) {
    if (!req.body.message) {
        return res.status(400).send('Request has to contain \'message\' key');
    } else {
        return null;
    }
}

function ServerErrorStack() {
    var emptyBody = new EmptyBody();
    var badRequest = new BadRequest();

    emptyBody.setSuccessor(badRequest);

    this.head = emptyBody;
}

var isProperRequest = function(req, res) {
    var serverErrorStack = new ServerErrorStack();

}

module.exports.EmptyBody = EmptyBody;
module.exports.BadRequest = BadRequest;
