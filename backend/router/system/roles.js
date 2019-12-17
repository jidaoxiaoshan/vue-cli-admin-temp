/*角色相关路由*/
const express = require("express");
const roles = express.Router();
const rolesList = require("../../jsonData/roles.json")

// 获取角色列表
roles.get('/system/role/list', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        rows:rolesList.rows,
        total:rolesList.total
    })
});

// 通过roleId获取角色详情
roles.get('/system/role/roleId', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});

// 添加角色
roles.post('/system/role/add', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});

// 修改角色
roles.post('/system/role/update', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});

// 删除角色
roles.post('/system/role/delete', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});

// 角色权限设置
roles.post('/system/role/dataScope', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});

// 角色状态设置
roles.post('/system/role/changeStatus', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});

module.exports = roles;
