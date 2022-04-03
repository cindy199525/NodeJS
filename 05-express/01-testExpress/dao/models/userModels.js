// 数据库集合的相关配置
// 1.定义数据集合的结构：定义出数据集合有哪些属性，属性的值是什么类型
const { Schema, model } = require('mongoose')//mongoose里的Schema方法解析出来
const usersSchema = new Schema({
    username: String,
    password: String
});

// 2.定义数据集合的模型，将schema和数据库的集合关联起来
// model('模型名称',userSchema,'数据库中的集合名称')
const usersModel = model('usersModel', usersSchema, 'users')


module.exports.usersModel = usersModel;