/*关于用户的数据库处理层*/

const mongoose = require('mongoose');
const {Schema} = mongoose;
const {ObjectId} = Schema.Types;

//加密
// const pdkdf2Async = require('util').promisify(require('crypto').pdkdf2)
// const passwordConfig = require('../../cipher/password_config')

// const HttpReqParaError = require('../../error/http_request_param_error')

const UserSchema = new Schema({
    userId: {type: ObjectId, required: true, index: 1},
    realName: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    age: {type: Number, max: 110, min: 0},
    password: {type: String},
});

const UserModel = mongoose.model('user', UserSchema);

async function insert(user) {
    return await UserModel.create(user)
}

async function getOneById(id) {
    return await UserModel.findOne({_id: id})
}

async function getOneByname(name) {
    return await UserModel.findOne({name: name})
}

async function list(params) {
    const match = {};
    const flow = UserModel.find(match);
    return await flow.exec()
}

async function createUserByName(user) {
    const usernameDupUser = await userModle.findOne({
        username: user.username,
    }, {_id: 1});

    if (usernameDupUser) {

        throw new HttpReqParaError('username', '用户名已被使用', 'sorry name no')

    }

    const passToSave = await pdkdf2Async(user.password, passwordConfig.SALT, passwordConfig.ITERATIONS, passwordConfig.DIGEST);

    const created = await insert({
        username: user.username,
        password: passToSave,
        name: user.name
    });
    return {
        _id: created._id,
        username:created.username,
        name:created.name
    }
}

async function getUserByNamePass(user) {
    const usernameDupUser = await UserModel.findOne({
        username: user.username,
    }, {_id: 1});

    if (usernameDupUser) {

        throw new HttpReqParaError('username', '用户名已被使用', 'sorry name no')

    }

    const pasaToFind = await pdkdf2Async(
        user.password,
        passwordConfig.SALT,
        passwordConfig.ITERATIONS,
        passwordConfig.KEY_LENGTH,
        passwordConfig.DIGEST
    );

    const found = await UserModel.findOne({
        username: user.username,
        password: pasaToFind
    }, {
        password: 0,
    });
    return found
}

module.exports = {
    insert,
    getOneById,
    getOneByname,
    createUserByName,
    getUserByNamePass,
    list
}
