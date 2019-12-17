/*字典相关路由*/
const express = require("express");
const dictTypeList = require("../../jsonData/dict.json");
const dictDataList = require("../../jsonData/dictData.json");
const dict = express.Router();

// 获取字典类型列表
dict.get('/system/dict/type/list', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        rows: dictTypeList.rows,
        total: dictTypeList.total,
    })
});

dict.get('/system/dict/data/list', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        rows: dictDataList.rows,
        total: dictDataList.total,
    })
});

// 通过dictId获取字典详情
dict.get('/system/dict/?dictId', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        data: []
    })
});

// 添加
dict.post('/system/dict/add', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        data: []
    })
});

// 修改
dict.post('/system/dict/update', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        data: []
    })
});

// 删除
dict.post('/system/dict/delete', (req, res) => {
    res.json({
        status: 200,
        msg: "成功了",
        data: []
    })
});

module.exports = dict
