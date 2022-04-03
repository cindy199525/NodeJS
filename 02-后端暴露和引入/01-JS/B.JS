// var bjs = require('./A.js')

// var { num, foo } = require('./A.js')
var { num2:num3, foo2:foo3 } = require('./A.js')
//相当于num2 as num3,foo2 as foo3

// console.log("HELLO b.js",bjs);
// console.log("HELLO b.js", bjs.num, bjs.foo);
console.log("HELLO b.js", num3, foo3); 

// foo3()
var a =foo3();
console.log(a);