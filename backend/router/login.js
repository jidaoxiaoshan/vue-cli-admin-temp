/*登录相关的路由*/
const express = require("express");
const UserInfo = require("../jsonData/userInfo.json");
const login = express.Router();

// 登录
login.post('/login', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    if (req.query.username === 'admin' && req.query.password === 'admin123' && req.query.code==="123") {
        req.session.username = "54786523146username652";
        req.session.password = "9512365789password6462";
        res.json({
            status: 200,
            msg: "login!",
            data: {
                token: req.session.username + req.session.password
            }
        })
    } else {
        res.json({
            status: 403,
            msg: "登录失败，账号或密码错误！",
        })
    }
});
// 退出登录
login.post('/loginOut', (req, res) => {
    req.session = null;
    res.json({
        status: 200,
        msg: "登出成功！"
    })
});
// 获取用户信息
login.get("/getInfo", (req, res) => {
    res.json({
        status: 200,
        msg: "获取用户信息",
        user: UserInfo.user,
        permissions: UserInfo.permissions,
        roles: UserInfo.roles,
    })
});
// 获取验证码
login.get("getCode", (req, res) => {
    res.json({
        status: 200,
        msg: "",
        data: {}
    })
});


module.exports = login;
