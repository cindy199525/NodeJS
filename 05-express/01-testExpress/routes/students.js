var express = require('express');
const { data } = require('jquery');
var router = express.Router();


let students = [
    { id: 1, name: '张三', age: '11', gender: '男' },
    { id: 2, name: '李四', age: '12', gender: '男' },
    { id: 3, name: '王五', age: '13', gender: '男' },
    { id: 4, name: '张三疯', age: '14', gender: '女' },

]

router.get('/getstudents', function (req, res, next) {
    res.send({
        message: '学生信息获取成功',
        data: students,
        status: 1,

    })

});

// 删除学生
router.post('/deleteStudents', function (req, res, next) {
    console.log(req.body);
    students = students.filter(function (item, index) {//filter对数组进行一个筛选，返回一个新数组
        return req.body.id != item.id
    })
    res.send({
        message: '学生信息删除成功',
        data: students,
        status: 1,

    })

});

module.exports = router;
