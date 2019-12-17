const HttpBaseError = require('./http_base_error');

const ERROR_CODE = 4010001;
class NoAuthError extends HttpBaseError {
    constructor(username) {
        super(401, '没有权限访问该资源', ERROR_CODE, username)
    }
}

module.exports = NoSuchUserError;