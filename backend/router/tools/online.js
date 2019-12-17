/*用户在线相关路由*/
const express = require("express");
const onlineList = require("../../jsonData/onLine.json");
const online = express.Router();

// 获取当前在线人数列表
online.get('/monitor/online/list', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        rows: onlineList.rows,
        total: onlineList.total
    })
});

// 通过tokenId强退用户
online.post('/tools/online/?tokenId', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        data: []
    })
});

module.exports = online;
