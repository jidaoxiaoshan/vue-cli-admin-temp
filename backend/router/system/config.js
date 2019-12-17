/*配置参数相关路由*/
const express = require("express");
const configList = require("../../jsonData/config.json");
const confg = express.Router();

// 获取字典类型列表
confg.get('/system/config/list', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        rows: configList.rows,
        total: configList.total,
    })
});

module.exports = confg;
