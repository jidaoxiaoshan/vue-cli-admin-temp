/*目录相关路由*/
const express = require("express");
const menu = express.Router();
const fs =require("fs");
const menuRouters = require("../../jsonData/menu.json")

// 获取到前端路由列表
menu.get('/getRouters', (req, res) => {
    // console.log(menuRouters);
    res.json({
        status:200,
        msg:"成功了",
        data:menuRouters
    })
});

// 获取到目录列表
menu.get('/system/menu/list', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:menuRouters
    })
});
// 通过id获取指定菜单详情
menu.get('/system/menu/?menuId', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});
// 查询下拉菜单树结构
menu.get('/system/menu/children', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});

// 新增目录
menu.post('/system/menu/add', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});
// 修改目录
menu.post('/system/menu/update', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});
// 删除目录
menu.post('/system/menu/delete', (req, res) => {
    res.json({
        status:200,
        msg:"成功了",
        data:[]
    })
});

module.exports = menu;
