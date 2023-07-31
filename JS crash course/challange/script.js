//alert('hello');
//console.log('hello');

//challenge 1:your age in days
// born year=10 yrs *365 days=current//
function ageInDays() {
  var birthYear = prompt("what year were you born..Friend??");
  var ageInDays = (2022 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode("You are" + ageInDays + "days old");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}
function reset() {
  document.getElementById("ageInDays").remove();
}
//challenge 2 :cat generator
function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
}
//Challenge 3:Rock,Paper,Scissors
function rpsGame(yourChoice) {
  let humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = Choice(randToRpsInt());
  // results=decideWinner(humanChoice,botChoice)
  // message=finalMessage(results)
  // rpsfrontend(yourChoice.img,computerChoice,message)
}
//how to make bot to choose randomly?0,1,2,3,4
//use math.random();pick numb b\w 0 to1
//to pick from 0 to 2 math.floor.(math.random()*3)

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}
//['rock','paper','scissors'][Math.floor(Math.random()*3)]
function Choice(number) {
  return ["rock", "paper", "scissors"][number];
}
//then winner part
function decideWinner(yourChoice, botChoice) {
  rpsdatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };
  var yourScore = rpsdatabase[yourChoice][botChoice];
  var botScore = rpsdatabase[botChoice][yourChoice];
  return [yourScore, botScore];
}
function finalMessage([yourScore, botScore]) {
  if (yourScore === 0) return { message: "you lost!", color: "red" };
  elseif(yourScore === 0.5);
  return { message: "you tied!", color: "yellow" };
}
//Challenge 4-Change the color of All buttons
let all_buttons = document.getElementsByTagName("button");
let copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(button) {
  if (button.value === "red") {
    buttonRed();
  } else if (button.value === "green") {
    buttonGreen();
  } else if (button.value === "reset") {
    buttonReset();
  } else if (button.value === "random") {
    buttonRandom();
  }
}

function buttonRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}
function buttonGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}
function buttonReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}
function buttonRandom() {
  let choices = ["btn-primary", "btn-danger", "btn-success", "btn-warning"];
  for (let i = 0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}

//*Challenge 5: Blackjack
let blackjackGame = {
  you: {
    scorespan: "#your-blackjack-result",
    div: "#your-box",
    score: 0,
  },
  dealer: {
    scorespan: "#dealer-blackjack-result",
    div: "#dealer-box",
    score: 0,
  },
};
const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

const hitSound = new Audio("sounds/swish.m4a");
document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackjackHit);

function blackjackHit() {
  showcard();
}
function showcard() {
  let cardImage = document.createElement("img");
  cardImage.src = "images/Q.png";
  document.querySelector(YOU["div"]).appendChild(cardImage);
  hitSound.play();
}
