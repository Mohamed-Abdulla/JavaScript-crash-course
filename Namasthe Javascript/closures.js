//!closures means that function bind together with its lexical environment
//!function along with lexical scope forms a closure known as closure
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
//   y();
// }
// console.log(z);
// var z = x();
// z();
//`module design pattern
//`uses of closures
//`currying
//`functions like once
//`memoize
//`maintaining state in async  world
//`setTimeouts
//`Iterators
//`and many more...
//!SetTimeout and closures
//!print 1 to 5 after 1 second
//!method 1
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x(); //6,6,6,6,6,
//~1.when a settimeout fn is stores somewhere and it remembers the referance of i bcoz of closures
//~2.when using var,it is a block scope ,enviroment of function refered to i on first iteration,similary all pointing towards same i
//~3.then it sets all functions and it does not wait for timer to expire,then js executes loop and becomes 6 ,becoz timer is too late,by
//~that time i is already 6,so it prints 6 bcoz it refers to same memory  location 6
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x(); //1,2,3,4,5
//~it is not worked with var ,bcoz copy of i refered to a same memory location.bcoz of global scope
//~so the quick fix is using let,becoz it is block scope,that means when it is executed
//~it creates a new variable i and it is not pointing to same memory location,when callback function
//~is executed,it has new copy i everytime, this fun has a closure with its new variable i
//!method 2
function x() {
  for (var i = 1; i <= 5; i++) {
    function closure(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    closure(i);
  }
}
x(); //1,2,3,4,5
//~when interviewers says ,use var and achieve the same result
//~closures will help you
//~it is not worked with var before,bcoz copy of i refered to a same memory location.bcoz of global scope
//~ if we give new copy of i to the set time out ,it will  work with var also
//~for THAT
//~we can form a closure, a function and enclose the settimeout inside the function,we wants a new copy of i,
//~right for each iteration,then call the function with supplied i as arg
//~it works becos everytime a fun calls on every  iteration ,i created new copy of i to x
//~and pass it to parameter
