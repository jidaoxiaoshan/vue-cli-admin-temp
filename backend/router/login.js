const express = require("express");
const login = express.Router()

login.get('/login',(req,res) => {
    res.json({
        status:200,
        msg:"login!"
    })
});

modules.exports = login;
