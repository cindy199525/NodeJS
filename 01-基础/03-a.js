var a = 1

function test() {
    console.log("hello world");
}

//第一种方法：暴露一个对象，所以引用时必须obj.num或者obj.fun
export default {
    num: a,
    fun: test
};

//第二种方法：暴露单个变量或者函数
export var b = 1

export function test2(){
    console.log("hello nodejs");
}