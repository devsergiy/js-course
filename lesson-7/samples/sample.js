1. write a currying function myMultiply
which will multiple argument

2. write currying function myConcat
var f = myConcat("hello")
f("Bob")
> "Hello Bob"

function curryAdd(x) {
  return function(y, z) {
    return function(a, b, c) {
      return x + y + z + a + b + c;
    }
  }
}


curryAdd(1)(1, 1)(1, 1, 1)
6
// curryAdd(1)("1", 1)(1, 1, 1)
// "111111"
// curryAdd(1)(1, 1)(1, 1, "1")
// "51"
// curryAdd(1)(1, 1)(1, "1", 1)
// "411"
// curryAdd(1)(1, 1)(1, 1, 1)
// 6
// f2 = curryAdd(1);
// > function (y, z) {
//     return function(a, b, c) {
//       return x + y + z + a + b + c;
//     }
//   }
// f3 = f2(1, 1);
// (a, b, c) {
//       return x + y + z + a + b + c;
//     }
// f3(1, 1, 1)
// 6
// curryAdd(1)(1, 1)(1, 1, 1)
// 6


a = {x: 100}
Object {x: 100}
b = {x: "^^^"}
Object {x: "^^^"}
b = {x: "^_^"}
Object {x: "^_^"}
function Print() {
  console.log(this.x);
}
undefined
Print()
VM1494:3 Object {val: 17}
undefined
x
Object {val: 17}
function Print() {
  'use strict';
  console.log(this.x);
}
undefined
Print()
Uncaught TypeError: Cannot read property 'x' of undefined(…)Print @ anonymous function) @ VM1562:2InjectedScript._evaluateOn @ VM1394:875InjectedScript._evaluateAndWrap @ VM1394:808InjectedScript.evaluate @ VM1394:664
Print.call(a)
100
undefined
Print.call(b)
^_^
undefined
c = {x: 9999999, print: Print}
Object {x: 9999999}print: Print()arguments: (...)caller: (...)length: 0name: "Print"prototype: Print__proto__: ()<function scope>x: 9999999__proto__: Object
c.print()
9999999
undefined

// call and apply with args
function Greeting(greet) {
  this.greet = greet;
}

a = new Greeting("hello")
b = new Greeting("ola")


function Hello(name) {
  console.log(this.greet + ' ' + name);
}


Hello.call(a, "Bob")
hello Bob
undefined
Hello.call(b, "Bob")
ola Bob
undefined
Hello.apply(a, "Bob")
 Uncaught TypeError: Function.prototype.apply: Arguments list has wrong type(…)(anonymous function) @ InjectedScript._evaluateOn @ VM1797:875InjectedScript._evaluateAndWrap @ VM1797:808InjectedScript.evaluate @ VM1797:664
Hello.apply(a, ["Bob"])
hello Bob
undefined
Hello.apply(b, ["Bob"])
ola Bob
undefined


// BIND sample

Hello.apply(a, ["Bob"])
undefined Bob
undefined
Hello
Hello(name) {
  console.log(this.greet + ' ' + name);
}
a
[]
a = {greet: "hello"}
Object {greet: "hello"}
Hello.apply(a, ["Bob"])
hello Bob
undefined
Hello.apply(b, ["Bob"])
ola Bob
undefined
var helloWrapper = Hello.bind(a);
undefined
helloWrapper("Bob")
hello Bob
undefined
helloWrapper
Hello(name) {
  console.log(this.greet + ' ' + name);
}
helloWrapper("Anna")
VM1 hello Anna
undefined
var helloWrapper = Hello.bind(b);
undefined
helloWrapper("Anna")
ola Anna
undefined
helloWrapper("Bobby")
ola Bobby
undefined
Hello()
undefined undefined
undefined
Hello(a)
undefined [object Object]
undefined
Hello("ssdfds")
undefined ssdfds
undefined
Hello.call(a, "ssdfds")
hello ssdfds
undefined
