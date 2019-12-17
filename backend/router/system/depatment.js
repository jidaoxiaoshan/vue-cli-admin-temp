
/*部门相关路由*/
const express = require("express");
const depatmentList = require("../../jsonData/dept.json");
const depatment = express.Router();

// 部门列表
depatment.get('/system/dept/list', (req, res) => {
    res.json({
        status:200,
        msg: "成功了",
        data: depatmentList
    })
});

// 通过deptId查询部门
depatment.get('/system/dept/deptId', (req, res) => {
    res.json({
        status:200,
        msg: "成功了",
        data: []
    })
});

// 子部门
depatment.get('/system/dept/children', (req, res) => {
    res.json({
        status:200,
        msg: "成功了",
        data: []
    })
});

// 新增部门
depatment.post('/system/dept/add', (req, res) => {
    res.json({
        status:200,
        msg: "成功了",
        data: []
    })
});

// 更新部门
depatment.post('/system/dept/update', (req, res) => {
    res.json({
        status:200,
        msg: "成功了",
        data: []
    })
});

// 删除部门
depatment.post('/system/dept/delete', (req, res) => {
    res.json({
        status:200,
        msg: "成功了",
        data: []
    })
});

module.exports = depatment;
