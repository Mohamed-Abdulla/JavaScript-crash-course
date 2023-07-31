//These are higher order functions
const arr = [5, 1, 3, 2, 6];
//map func is used to transform a array
//Ex
//Double -[10,2,6,4,12]
//Triple-[15,3,9,6,18]
//Binary - ['101','1','11','10','110']
function double(x) {
  return x * 2;
}
function triple(x) {
  return x * 3;
}

//double is a func. this func iterates each value in the array.and create a new array out of it
const doubleOp = arr.map(double);
console.log(doubleOp);
const tripleOp = arr.map(triple);
console.log(tripleOp);
const binaryOp = arr.map((x) => x.toString(2));
console.log(binaryOp);
