//linking js with js

console.log('hello');
//alert('yooooooooooooo')

//Variables

var b='smoohtie' //string
console.log(b);
var c=7  //number
console.log(c);
//manipulate the DOM
//to edit  html page content in JS-use document.getElementBy
document.getElementById('someText').innerHTML =('hey alien')
//Doing GUI develoment very fast

//ask a user input 

var age=prompt('what is ur age') //prompt getting input in alert msg and reading it
//whatever age i getback i wanna add age in main html page and readout by below code
document.getElementById('someText').innerHTML =age; //add user input to change main page