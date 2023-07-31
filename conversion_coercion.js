/*let num = String(7)             //explicit conversion
console.log(num,typeof num);
let num1 = Number("123")
console.log(num1,typeof num1);*/
let x
console.log(x,typeof x);
x=8
console.log(x,typeof x);
x=x +""


console.log(x,typeof x); //coercion -js change based on requirement
x=x-2
console.log(x,typeof x);
x=!x
console.log(x,typeof x);
d=new Date();

console.log(d,typeof d);


console.log(Boolean(7)); // all num are true -truthy ,false value
console.log(Boolean(0)); //0 - false
console.log(Boolean(null));
x=+x +2
console.log(x);
let a=Number("abd 786")  // oput- nan
console.log(a);
let b=parseInt("786 abd")  // oput- 786
console.log(b);