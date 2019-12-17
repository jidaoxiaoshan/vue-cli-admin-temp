const HttpBaserError = require('./http_base_error');

const ERROR_CODE = 4040000

class ResourceNotFoundError extends HttpBaserError {
    constructor(msg) {
        super(404, '404，请稍后重试！', ERROR_CODE, `404 ${msg}`)
    }
}

module.exports = ResourceNotFoundError;