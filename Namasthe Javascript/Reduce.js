//~Reduce doesnot actually reduce anything
//~reduce means takes all value and comes up with a single value.
const arr = [5, 1, 3, 2, 6];
//~usecase -- sum or find max
//!this is normal method for sum

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// console.log(findSum(arr));
// console.log(findMax(arr));
//!filter method
//~acc is used to accumulate the values
//~current represents each value in a array

//!for sum
const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0); //0 is the intial value to acc
// console.log(output);
//or this is shorthand
const op = arr.reduce((acc, curr) => acc + curr);
// console.log(op);

//!for max

const outputMax = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

// console.log(outputMax);
//or shorthand
const op1 = arr.reduce((max, curr) => (max = curr));
// console.log(op1);

//Tricky ex
const users = [
  { firstName: "abd", lastName: "abdulla", age: 20 },
  { firstName: "donald", lastName: "trump", age: 76 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "samantha", lastName: "ruth", age: 30 },
  { firstName: "rashmika", lastName: "mandanna", age: 20 },
];

//~to accumulate persons based on age -sum up the persons based on age
const opt = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    //check if already this age present or  not
    //20
    acc[curr.age] = ++acc[curr.age]; //20= if 20 increase it
  } else {
    acc[curr.age] = 1; // at first its empty ,so we add it ,if it already there, increment it
  }
  return acc;
}, {}); //we use {} bcoz we want output as object format
console.log("opt", opt);

//~we need to filter only people's firstname whose age is less than 30
const output1 = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(output1);
