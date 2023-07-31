//local to global variable
//local variable creaed inside function
//global variable created outside function\
//we cant access local var outside the function
//default value - even if we didnt pass value ,we can set default in function


/*
let user='Abd'  //global var
function greet(u) //accept passing value
{
    let num=5           //local variable
    console.log(user);
    return `hello ${u} !!`
}

let str=greet(user) //passing value
console.log(str);
*/
function add(num1,num2,num3=1)
{
    console.log(num1,num2,num3);
    return num1+num2+num3
}
let result=add(5,4,2)
console.log(result);