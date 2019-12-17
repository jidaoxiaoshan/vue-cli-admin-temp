/*岗位相关路由*/
const express = require("express");
const positionList = require("../../jsonData/position.json");
const position = express.Router();

// 获取岗位列表
position.get('/system/post/list', (req, res) => {
    res.json({
        status:200,
        msg: "成功了",
        rows: positionList.rows,
        total: positionList.total,
    })
});

// 通过postId获取岗位详情
position.get('/system/post/postId', (req, res) => {
    res.json({
        status:200,
        msg: "成功了",
        data: []
    })
});

// 添加岗位
position.post('/system/post/add', (req, res) => {
    res.json({
        status:200,
        msg: "成功了",
        data: []
    })
});

// 编辑岗位
position.post('/system/post/update', (req, res) => {
    res.json({
        status:200,
        msg: "成功了",
        data: []
    })
});

// 删除岗位
position.post('/system/post/delete', (req, res) => {
    res.json({
        status:200,
        msg: "成功了",
        data: []
    })
});

module.exports = position;
