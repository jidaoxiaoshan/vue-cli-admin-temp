class HttpBaseError extends Error {
    constructor(httpStatusCode, httpMsg, errCode, msg) {
        super(`HTTP ERROR:${msg}`);
        this.httpStatusCode = httpStatusCode;
        this.httpMsg = httpMsg;
        this.errCode = errCode;
        this.msg = msg;
    }
}

module.exports = HttpBaseError;

throw new HttpBaseError(404,'资源不存在',100000,'resource not found')