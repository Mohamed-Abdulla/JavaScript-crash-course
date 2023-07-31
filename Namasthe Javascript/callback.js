//!what is callback fun in js
//~ it is like passing a func into another func like firstcls func.it is very powerful.
//~all code are executed in callstack ,it can also called as main thread.
setTimeout(() => {
  console.log("timer");
}, 5000);
function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});
//! js is synchrounous single threaded language
//~it executes code line by line
//!blocking main thread
//~when any operations block a call stack,it is called blocking main thread.
//~for eg. when some operations takes long times, others operations are blocked,it shoud wait. so you should never block call stack .
//~so operations which takes time should run in async like settimeout()
//!power of callbacks
//`it gives access to a whole async world in synchronous single threaded language
//!deep about event listeners
// document.getElementById("clickMe").addEventListener("click", function xyz() {
//   alert("button Clicked");
// });
//!closures demo with event listeners
function attachEventlisteners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("button Clicked", ++count);
  });
}
attachEventlisteners();
//~lets count how many times button clicked and print it
//~Garbage Collection and remove event listeners
