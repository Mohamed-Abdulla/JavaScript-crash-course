//  '\' - whenever a backslash (\) is found inside quoted text, it
// indicates that the character after it has a special meaning. This is called
// escaping the character.

//~ \n - new line , \t -tab

console.log("this is a first line \n and this is a second line");
console.log("this is a first sentence \t and this is a second sentence");

//To use backslash as a character
console.log('new line character can be written as "\\n"');

// ~The following line will produce the string "concatenate":
console.log("con" + "cat" + "e" + "nate");

console.log(`half of 100 is ${100 / 2}`);

console.log(typeof 4.5);
// → number
console.log(typeof "x");
// → string

// - operator both unary and binary
console.log(-(10 - 2));

//compare strings

console.log("abdulla" > "abdulla");

console.log(NaN == NaN);

console.log(false === "");

console.log(null || "");

let name;
console.log(name);

// prompt("enter name");

// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of " + theNumber * theNumber);

// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//   console.log("Your number is the square root of " + theNumber * theNumber);
// }

let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
