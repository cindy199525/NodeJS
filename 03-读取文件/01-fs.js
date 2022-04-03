//引入文件系统模块
const fs = require('fs')


//1.读取文件内容
//异步
// fs.readFile('test.txt','utf-8',function(err,data){
//     // console.log('err',err);
//     // console.log('data',data);

//     if(err){
//         console.log("读取失败");

//     }
//     else{
//         console.log("读取成功");
//         console.log(data);

//     }

// });

// 0 '' undefined null NaN false转成false
//async异步 sync同步


//同步
// const a = fs.readFileSync('test.txt', 'utf-8');
// console.log(a);


// try {
//     const a = fs.readFileSync('test.txt', 'utf-8');
//     console.log("读取成功", a);
// } catch (error) {
//     console.log("读取失败");

// }



//2.往文件写入内容

fs.writeFile('test.txt','这是写入的东西',function(err){
    if(err){
        console.log('');
    }
})

