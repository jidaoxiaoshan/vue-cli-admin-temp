const express = require("express");
const router = express.Router()
// 渲染页面
router.get('/',(req,res) => {
    res.render('index.html')
});

module.exports = router;
