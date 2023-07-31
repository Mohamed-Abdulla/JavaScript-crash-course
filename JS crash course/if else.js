//conditionals,control flows(if else)
// above 18 nd below 35 are my cus for my program
//if else flow

/*var age =prompt('what is ur age') //let fun dont work with prompt
if ((age>=18)&&(age<=35)){
    status = 'target audiance'
    console.log(status);
}else{
    status = 'not my audi'
    console.log(status);
}*/
//switch statements 
//df b/w weekday vs weekend
//day 0--> sunday
//day6--> saturday
//day5- friday

switch(21){
    case 0:
    case 5:
    case 6:
        text='weekend';
        break;
    default:
        text='weekday'
}
console.log(text);