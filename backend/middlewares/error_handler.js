const HttpBaseError = require('../error/http_base_error')

function handler(options) {
    return function (err,req,res,next) {
        console.log(err);
    }
}
module.exports = handler;