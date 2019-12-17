/*用户相关路由*/
const express = require("express");
const userList = require("../../jsonData/userlist.json");
const user = express.Router();
const {insert} = require("../../models/mongoose/user.js")

// 获取用户列表
user.get('/system/user/list', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        rows:userList.rows,
        total:userList.total,
    })
});

// 通过userId查询用户详情
user.get('/system/user/userId', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});

// 通过userId查询用户详情
user.get('/system/user/userId', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});

// 添加新用户
user.post('/system/user/add', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});

// 修改用户信息
user.post('/system/user/update', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});

// 删除用户
user.post('/system/user/delete', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});

// 密码重置功能
user.post('/system/user/resetPwd', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});

module.exports = user;
