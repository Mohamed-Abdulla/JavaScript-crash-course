// It is a technique in functional programming, transformation of the function of multiple arguments
// into several functions of a single argument in sequence.
let mulitply = function (x, y) {
  console.log(x * y);
};

mulitply(2, 2);

let mulitplybyTwo = mulitply.bind(this, 2); //here  set to x
mulitplybyTwo(3);

let mulitplybyThree = mulitply.bind(this, 3);
mulitplybyThree(3);
//or by closure concept
let multiply1 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
let mulitplybyTwo2 = multiply1(2);
mulitplybyTwo2(3);
