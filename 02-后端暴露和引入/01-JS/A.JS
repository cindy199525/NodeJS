var num = 10;
function foo() {
    console.log("hello");
    var a = 1;
    return a;
}


console.log("HELLO a.js");


// module.exports.num2 = num;
// module.exports.foo2 = foo();
// module.exports.foo2 = foo;//foo时是返回函数体，foo()是返回函数内return的值


module.exports = {
    num2: num,
    foo2: foo//简写的话，foo,
}
