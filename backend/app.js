const express = require('express');
const path = require('path');
// 处理post请求
const bodyParser = require('body-parser');
// 连接数据库
require('./db/mongoose.js');
// 设置session
const session = require('express-session');
// 路由相关
const router = require('./router/index.js');
const login = require('./router/login.js');
const user = require('./router/system/user.js');
const menu = require('./router/system/menu.js');
const roles = require('./router/system/roles.js');
const position = require('./router/system/position.js');
const depatment = require('./router/system/depatment.js');
const notice = require('./router/system/notice.js');
const dict = require('./router/system/dict.js');
const confg = require('./router/system/config.js');
const loginInfo = require('./router/tools/loginInfo.js');
const online = require('./router/tools/online.js');
const logs = require('./router/system/logs.js');

const app = express();

// 解决跨域
app.all('/dev-api/*', function(req, res, next) {
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
// session配置
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
app.use(user);
app.use(menu);
app.use(roles);
app.use(position);
app.use(depatment);
app.use(notice);
app.use(dict);
app.use(confg);
app.use(loginInfo);
app.use(online);
app.use(logs);

app.listen(8081, function () {
    console.log('server 8081 running');
});
