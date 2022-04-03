// npm i mongoose 安装插件，连接mongoDB
const mongoose = require('mongoose')
const dbURL = 'mongodb://localhost:27017/studentsSystem';//项目需要连接的mongodb数据库地址
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
// 当项目与数据库连接成功时，触发下列事件
mongoose.connection.on('connected',function(){
  console.log(dbURL+'数据库连接成功');
})