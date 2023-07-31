//set timeout
console.log("start");

setTimeout(() => {
  console.log("timer");
}, 5000);
console.log("end");
//million
//this is called  main thread blocking .
//here callback has to wait for 10 sec even after timer has to expires after 5 sec.
//!this is called concurrency model.
//!wait for 10 sec
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}
console.log("while expires");
//in real life,we dont write this type of code

//settimeout 0- what is use of this? this is used in defer, means if we want to executes
// this code after some code,u can use this
console.log("start");

setTimeout(() => {
  console.log("timer");
}, 0);
console.log("end");
