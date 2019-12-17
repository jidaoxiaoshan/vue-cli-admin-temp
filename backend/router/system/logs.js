/*日志logs相关路由*/
const express = require("express");
const loginInfoList = require("../../jsonData/loginInfos.json");
const operlogList = require("../../jsonData/operlog.json");
const logs = express.Router();

// 获取日志logs类型列表
logs.get('/monitor/logininfor/list', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        rows: loginInfoList.rows,
        total: loginInfoList.total
    })
});

logs.get('/monitor/operlog/list', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        rows: operlogList.rows,
        total: operlogList.total
    })
});

module.exports = logs
