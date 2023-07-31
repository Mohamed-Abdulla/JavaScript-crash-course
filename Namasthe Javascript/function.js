//!function statement aka function statement
a();
// b();
function a() {
  console.log("a called");
}
//This way of creating func is called func statement
//! function expression
var b = function () {
  console.log("b called");
};
//~function acts like a value
//~fun is initialized as value to var b
//!what is difference between func statement and func expression?
//~it is hoisting.
//~when we call both fn before it is created, fun a runs and gives as output a called.but b is considered
//~as variable and set it undefined. so it cant run b.
// !function declaration
//`it is a another name of function statement
// !anonymous func
// function () {
//   console.log("anonymous called");
// }

//`it is a function without name
//`it is same as normal func but has no name
//`if we run anonymous fn like it thorugh error.bcoz fun must have name
//`then the use of anon fun is , it is being used where func are used as values. like func expression

// !named function expression

var c = function named() {
  console.log("c called", named);
};
c();
// named();
//?same like func exp but funtion itself has a name,you can call func by only using that assigned variable name not by func name,
//?it throws error as named is not defined
//?when we assigned to variable , this named is not created in global scope,instead it is created as
//?local variable.you can access named inside that func

// !differnt b/w parameter and arguments?
function d(parameter1, parameter2) {
  console.log("d called", parameter1, parameter2);
}
d(1, 2);
//*both are different
//*parameter is a value that is passed to a function.it is a local variable.
//*values which we pass to a function are called arguments
//*those labels/identifiers which get that argument value is called parameters
//! what are firstClassFunction?
function e(a) {
  //   console.log(a);
  var z = 10;
  return function f() {
    console.log(z, "return");
  };
}
// e(function w() {});
e()();
//~functions are first class citizen or first class functions
//~first cls fn is nothing but using function as a value to another function
//~we can also return function from another function
//~we can pass func as an arg to another function
//~these abilities are called frst class func

//! arrow functions
const hello = () => {
  console.log("hello world");
};
