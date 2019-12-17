const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/ji_dao';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false, // 是否建立自动索引，默认为false
    reconnectTries: Number.MAX_VALUE, // 从不停止重连数据库 Never stop trying to reconnect
    reconnectInterval: 500, // 每 500ms 重新连接数据库
    poolSize: 10, // 设置连接数，默认为5个连接， 当前设置为10个连接
    // 如果你希望链接错误时终止数据库操作，请将此选项设为 0 以及把 bufferCommands 设为 false
    bufferMaxEntries: 0,
    keepAlive: 120 //对于长期运行的后台应用，启用毫秒级 keepAlive 是一个精明的操作
};

mongoose.connect(uri, options);

let ObjectId = mongoose.Types.ObjectId;
let id1 = new ObjectId;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function () {
    // we're connected!
    console.log("链接数据库成功!","jd_" + id1);
});


// 简易版无配置的连接方法
/*const mongoose = require('mongoose');
mongoose.Promise = Promise

const uri = 'mongodb://localhost:27017/ji_dao';
mongoose.connect(uri, {useMongoClient: true});
const db = mongoose.connection;

db.on('open', ()=>{
    console.log('db connection');
});

db.on('error', ()=>{
    console.log('db error');
});*/

module.exports = db;













module.exports = db;
