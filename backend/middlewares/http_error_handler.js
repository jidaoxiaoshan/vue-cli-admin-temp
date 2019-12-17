const HttpBaseError = require('../error/http_base_error')

function handler(options) {
    return function (err,req,res,next) {
        if(err instanceof HttpBaseError) {
            res.statusCode = err.httpStatusCode;
            res.json({
                code:err.errCode,
                msg:err.httpMsg
            })
            console.log(err);
        } else {
            next(err)
        }
    }
}
module.exports = handler;