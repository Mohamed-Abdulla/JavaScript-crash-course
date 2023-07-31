//Whenever a gec is created, window -global object is created along with it,even though  no code is there.
//this - refers to that window object
// outside variables and functions - global space
//whenever we run a program,that program variable and func are attached to global obj which is window object.

var a = 10;
function b() {
  let a = 1;
}
console.log(window.a);
console.log(a);
console.log(this.a);
// b();
