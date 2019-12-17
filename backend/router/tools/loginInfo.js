/*登录日志相关路由*/
const express = require("express");
const loginInfo = express.Router();

// 获取当前登录日志列表 （在线人数）
loginInfo.get('/tools/loginInfo/list', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        data: []
    })
});

// 获取历史登录日志列表
loginInfo.get('/tools/historyLogin/list', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        data: []
    })
});

// 获取vip会员列表
loginInfo.get('/tools/vip/list', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        data: []
    })
});

module.exports = loginInfo;
