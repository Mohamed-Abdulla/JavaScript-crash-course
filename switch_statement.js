// mon-7am
// tue -thurs-4am
//fri-9am
//sat-sun -8am

let day = "Tesday";

/*if(day=="Monday")
console.log("7am");
else if(day=="Friday")
console.log("9am");
else if(day==="Tuesday"||day==="Wednesday"||day=="Thursday")
console.log("4am");
else if (day==="Saturday"||day==="Sunday")
console.log("8am");
else
console.log("invalid day");*/
switch (day) {
  case "Monday":
    console.log("7am");
    break;
  case "Tuesday":
  case "wednesday":
  case "Thursday":
    console.log("4am");
    break;
  case "friday":
    console.log("9am");
    break;
  case "saturday":
  case "sunday":
    console.log("8am");
  default:
    console.log("sleeeeeeeeeeeeeeeeeeeeeeep"); // if none matches,default executes
}
console.log("get out");
