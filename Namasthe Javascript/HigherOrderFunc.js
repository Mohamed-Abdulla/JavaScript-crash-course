//!higerOrderFunctions
//~a function which takes another funct as an arg or return a func from it is known as higerOrderFunctions
//!This is a normal code
//~these code has lot of repeatations-- then how to write this code in a better way
// const radius = [3, 2, 4, 1];

//`calculate area
// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };
// console.log(calculateArea(radius));

//`calculate area
// const calculateCircumferance = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };
// console.log(calculateCircumferance(radius));

//`calculate area
// const calculateDiameter = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };
// console.log(calculateDiameter(radius));

//~How to write a better code?
//~this is called  as funcional programming.
//~this type of code interviewer execpts
//~this is  callback  func

const radius = [3, 2, 4, 1];
const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumferance = function (radius) {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};
//this is  higher order func
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculate(radius, area));
// console.log((radius.map(area))

//or
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
//calculate  area
console.log(radius.calculate(area));
//or
//calculate  circumferance
console.log(calculate(radius, circumferance));
//calculate  diameter
console.log(calculate(radius, diameter));

//Why this code is good?
