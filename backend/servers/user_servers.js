/*用户数据操作层*/

const User = require('../models/mongoose/user');
const httpRequestParamsError = require('../error/http_request_param_error')
const NoSuchUserError = require('../error/no_such_user_error')
const JWT = require('jsonwebtoken');
const JWTConfig = require('../cipher/jwt_config');


module.exports.getAllUsers = async function() {
    const users = await User.list();
    return users
};

module.exports.addNewUser = async function(username,password) {
    if (!username || !password) throw new httpRequestParamsError('user','用户名或密码不能为空');

    const created =  await User.createUserByName(username,password)

    const token = JWT.sign({
        _id: found._id.toString(),
        expireAt: Date.now().valueOf() + JWTConfig.expireIn
    },JWTConfig.SECRET)

    return {
        user:created,
        token,
    }
};
