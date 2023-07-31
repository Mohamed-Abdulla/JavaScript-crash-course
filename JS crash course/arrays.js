//Array 
//two ways of creating array
let fruits=[ 'apple', 'banana','orange' ]  //1st ways
fruits=new Array('apple', 'banana','orange' ) //1st ways
console.log(fruits[1]);   //access values
fruits[0]='pear'  //changing values
console.log(fruits);
//look through an array -use loop
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//array -common methods
console.log(fruits.toString()); //convert array  toString
console.log(fruits.join('*')); //join value between
console.log(fruits.pop(),fruits); // take last value
console.log(fruits.push('lemon'),fruits); //appends
fruits[3]='new fruit' //same as push
console.log(fruits);
fruits.shift() //remove 1st element from array
console.log(fruits);
fruits.unshift('kiwi') //addd 1st element to an array
console.log(fruits);
//lets say we have 2 arrays
//lets add both arrays
let veg=['tomato','carrot','brocoli']
let allgroceries=fruits.concat(veg);  //combine arrays
console.log(allgroceries);
console.log(allgroceries.slice(1,4));
console.log(allgroceries.reverse());
console.log(allgroceries.sort()); // sort by alphabet
let someNum=[,5,8,5,6,22,88,96,21]
//to sort numbers ,we need functions to do it
console.log(someNum.sort(function(a,b){return a-b})); //sort ascending
console.log(someNum.sort(function(a,b){return b-a})); //sort descending
//add 1 to 10 automatically in a array through loop
let newArray=new Array()
for(let num=0;num<10;num++){
    newArray.push(num)
}
console.log(newArray);