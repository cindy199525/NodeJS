var express = require('express');
// 后端路由，用于分配前端请求
var router = express.Router();


// 模拟数据库
// const users = [
//   { username: 'zhangsan', password: '123' },
//   { username: 'admin', password: '123' }

// ]

// // 数据库集合的相关配置
// // 1.定义数据集合的结构：定义出数据集合有哪些属性，属性的值是什么类型
// const { Schema, model } = require('mongoose')//mongoose里的Schema方法解析出来
// const usersSchema = new Schema({
//   username: String,
//   password: String
// });

// // 2.定义数据集合的模型，将schema和数据库的集合关联起来
// // model('模型名称',userSchema,'数据库中的集合名称')
// const usersModel = model('usersModel', usersSchema, 'users')


const { login } = require('../service/usersService')


// req是请求前端的东西，res是发送给前端东西
router.post('/login', async function (req, res, next) {
  console.log("成功进入到登录接口后端");


  //*******模拟登录***********
  // 登录判断
  // 1.接受前端发来的数据
  // 1.1-post:req.body
  // 1.2-get:req.query
  // console.log('登录的数据', req.body);

  // const result = users.some(function (item, index) {
  //   return item.username == req.body.username && item.password == req.body.password

  // })
  // if (result) {
  //   res.send({ message: '登录成功', status: 1 })
  //   // 这个就是前端的msg
  // } else {
  //   res.send({ message: '登录失败', status: 0 })
  // }

  // // send将后端处理结果相应（发送）给前端
  // // res.send('respond with a resource');
  // // res.send({ message: '登录成功', status: 1 });




  // **********用数据库真实登录**************
  // 接收到前端发送的用户数据
  const user = req.body;//{username:'123',password:'456'}

  // const result = await usersModel.find(user);//find就是望数据库集合里找有没有123的人
  // // 因为find方法是异步的(就是还没有查回来。就已经赋值了)，所以添加await和async
  // if (result.length > 0) {
  //   res.send({
  //     message: '登录成功',
  //     status: 1
  //   })
  // } else {
  //   res.send({
  //     message: '登录失败',
  //     status: 0
  //   })
  // }


  const data =await login(user);
  console.log(data);



});

router.post('/register', function (req, res, next) {
  console.log("成功进入到注册接口后端");
  // 登录判断
  //数组添加对象用push方法
  users.push(req.body)
  console.log(users);

  // send将后端处理结果相应（发送）给前端
  // res.send('respond with a resource');
  res.send({ message: '注册成功', status: 1 });
});



router.post('/IsAccess', function (req, res, next) {
  console.log(req.body);
  const username = req.body.username;//const {username} =req.body
  const result = users.some(item => item.username == username)
  if (result) {
    res.send({ message: '账号存在', status: 0 })
    // 这个就是前端的msg
  } else {
    res.send({ message: '账号合法', status: 1 })
  }


});


module.exports = router;
