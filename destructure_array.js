//destructure array - seperate values from arrays and assign to some values likea,b
let nums=[2,3,4,6]
console.log(nums);
/*let[a,b,c,d]=nums;
console.log(d);*/
//let[a,b,,d]=nums; //if we want to skip values put , ,
//console.log(d);

//swapping two variables
/*let a=3;
let b=4;
[a,b]=[b,a]
console.log(a,b);*/

//array of strings
let words="my name is abd abdulla".split(' ');//convert string to array by using split function
//to split my name in seperate array use 3 dots ...
let[a,b,c,...d]=words
console.log(words);
console.log(d);