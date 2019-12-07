const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = require('./router/index.js');
const login = require('./router/login.js');

const app = express();

// 解决跨域
app.all('/dev_api/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 开放文件夹
app.use('/public/', express.static(path.join(__dirname, './public/')));
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')));

// 使用模板
app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, './src/'));// 默认就是 ./views 目录

// post 请求
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(session({
    // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
    // 目的是为了增加安全性，防止客户端恶意伪造
    secret: 'test',
    resave: false,
    name: 'session_',
    saveUninitialized: true, // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
    cookie: { maxAge: 60000 }
}));

app.use(router);
app.use(login);

app.listen(8080, function () {
    console.log('server 8080 running');
});
