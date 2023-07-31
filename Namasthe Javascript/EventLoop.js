//set timeout
console.log("start");

setTimeout(() => {
  console.log("timer");
}, 5000);
console.log("end");

//dom api
console.log("start");

document.getElementById("clickMe").addEventListener("click", function cb() {
  console.log("button Clicked");
});
console.log("end");

//fetch api
console.log("start");

setTimeout(() => {
  console.log("timer");
}, 5000);
fetch("https://api/netflix.com").then(function cbF() {
  console.log("CB netflix");
});
console.log("end");
