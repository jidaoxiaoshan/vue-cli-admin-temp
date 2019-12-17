/*通知相关路由*/
const express = require("express");
const noticeList = require("../../jsonData/notice.json");
const notice = express.Router();

// 获取通知列表
notice.get('/system/notice/list', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        rows: noticeList.rows,
        total: noticeList.total
    })
});

// 通过noticeId获取通知详情
notice.get('/system/notice/?noticeId', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        data: []
    })
});

// 添加
notice.post('/system/notice/add', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        data: []
    })
});

// 修改
notice.post('/system/notice/update', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        data: []
    })
});

// 删除
notice.post('/system/notice/delete', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        data: []
    })
});

module.exports = notice
