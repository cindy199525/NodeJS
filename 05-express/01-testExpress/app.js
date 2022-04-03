var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentsRouter = require('./routes/students');



require('./dao/database')
// // npm i mongoose 安装插件，连接mongoDB
// const mongoose = require('mongoose')
// const dbURL = 'mongodb://localhost:27017/studentsSystem';//项目需要连接的mongodb数据库地址
// mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
// // 当项目与数据库连接成功时，触发下列事件
// mongoose.connection.on('connected',function(){
//   console.log(dbURL+'数据库连接成功');
// })





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 用于配置ajax请求的一级路径
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students', studentsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//  module.exports = app;
// 更改项目启动命令，nodemon app.js
app.listen(3000, () => {
  console.log("3000端口启动成功")
});
