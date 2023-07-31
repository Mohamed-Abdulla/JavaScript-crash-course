//!Important interview ques
let name = {
  firstName: "abd",
  lastName: "abdulla",
};
printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown,
    state
  );
};
printFullName.call(name, "Tirunelveli", "Tamilnadu");
//in call method first paramerer must be referance ,then may be argument

//to do the same for another  name ,we have a shorthand method
let name2 = {
  firstName: "elon",
  lastName: "musk",
};
//!function borrowing
//!call method
printFullName.call(name2, "Texas", "US");
//!apply  method
//df b/w call and apply is we pass arg as individual in call but in apply we pass array as a arg.
printFullName.apply(name2, ["Texas", "US"]);
//!bind method
//df b/w call and bind
//bind gives a copy  as a method and we can invoke this func later
let printMyName = printFullName.bind(name2, "Texas", "US");
printMyName();
