//Filter fn is used to filter a value in a array and create new array our of it
const arr = [5, 1, 3, 2, 6];
//filter odd values
const isOdd = arr.filter((x) => x % 2);
console.log(isOdd);

const isEven = arr.filter((x) => x % 2 === 0);
console.log(isEven);

const greaterthan4 = arr.filter((x) => x > 4);
console.log(greaterthan4);

//tricky  ex
const users = [
  { firstName: "abd", lastName: "abdulla", age: 20 },
  { firstName: "donald", lastName: "trump", age: 76 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "samantha", lastName: "ruth", age: 30 },
  { firstName: "mohamed", lastName: "abdulla", age: 20 },
];

//we need to filter only people's firstname whose age is less than 30
const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output);
