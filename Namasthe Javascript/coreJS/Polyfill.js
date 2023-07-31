//Polyfill is sort of browser fallback. what if your browser doesnot have a bind function,and
// you have to write your own bind func

let name = {
  firstName: "Mohamed",
  lastName: "abdulla",
};
let printName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
};
let printMyName = printName.bind(name, "Tirunelveli");
printMyName("TamilNadu");
//THis is how normal bind func works

//!now we have to implement our own bind fnc
Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args1) {
    obj.apply(args[0], [...params, ...args1]);
  };
};

let printMyName2 = printName.mybind(name, "Tirunelveli");
printMyName2("Tamilnadu");
