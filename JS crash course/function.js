//createa function
function fun(){
    console.log('this is a function');
}
//call a function that
fun()

/*lets create a func that take in a name and says hello followed by your name
for eg
name- 'abd'
return -'hello abd'*/

 function greeting(){
     var name =prompt("what is ur name")
     var result='hello'+" "+name
     console.log(result);
 }
 greeting()
 //this is better way to write a code becoz my func is dependent on argument
 function greeting(urname){
    var result='hello'+" "+urname
    console.log(result);
}
var name =prompt("what is ur name")
greeting(name)
 //func also take an argument-how do argumwnts work in func
//for eg= add 2 nums together in a function
function sum (num1,num2){
    var result = num1+num2
    console.log(result);
}
sum(1,2)