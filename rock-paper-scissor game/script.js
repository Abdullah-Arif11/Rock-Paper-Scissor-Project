let btns = document.querySelectorAll(".choose-btn");
let computer = document.querySelector(".computer-choice");
let msg = document.querySelector(".winner-msg");
let computerCounter = document.querySelector(".comp-count");
let userCounter = document.querySelector(".user-count");
let reset = document.querySelector(".reset")
let computerChoice = "";
let userChoice = "";
let userWin = "";
const counter = {
  userCount: 0,
  compCount: 0,
};
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    userChoice = btn.innerText;
    computerChoiceGenerator();
    checkWinner(userChoice, computerChoice);
    msg.classList.remove("hide");
    counterUpdater()
  });
});
const computerChoiceGenerator = () => {
  let computerChoiceIdx = Math.floor(Math.random() * 3);
  if (computerChoiceIdx === 0) {
    computerChoice = "Rock";
  } else if (computerChoiceIdx === 1) {
    computerChoice = "Paper";
  } else if (computerChoiceIdx === 2) {
    computerChoice = "Scissor";
  }
  computer.classList.remove("hide")
  computer.innerText = `Computer Choice: ${computerChoice}`;
};

const checkWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    msg.innerText = "Match Draw!";
    msg.style.backgroundColor = "#0f52ba"
  } else if (userChoice === "Rock" && computerChoice === "Paper") {
    msg.innerText = "Winner: Computer";
    counter.compCount += 1;
    msg.style.backgroundColor = "red"
  } else if (userChoice === "Rock" && computerChoice === "Scissor") {
    msg.innerText = "Winner: User";
    counter.userCount += 1;
    msg.style.backgroundColor = "green"
  } else if (userChoice === "Paper" && computerChoice === "Rock") {
    msg.innerText = "Winner: User";
    counter.userCount += 1;
    msg.style.backgroundColor = "green"
  } else if (userChoice === "Paper" && computerChoice === "Scissor") {
    msg.innerText = "Winner: Computer";
    counter.compCount += 1;
    msg.style.backgroundColor = "red"
  } else if (userChoice === "Scissor" && computerChoice === "Rock") {
    msg.innerText = "Winner: Computer";
    counter.compCount += 1;
    msg.style.backgroundColor = "red"
  } else if (userChoice === "Scissor" && computerChoice === "Paper") {
    msg.innerText = "Winner: User";
    counter.userCount += 1;
    msg.style.backgroundColor = "green"
  }
  console.log(counter.compCount, counter.userCount);
};
const counterUpdater = () => {
  computerCounter.innerText = `Computer: ${counter.compCount}`;
  userCounter.innerText = `User: ${counter.userCount}`;
};
reset.addEventListener("click", ()=> {
  counter.compCount = 0
  counter.userCount = 0
  msg.classList.add("hide")
  computerCounter.innerText = "User: 0"
  userCounter.innerText = "Computer: 0"
  computer.classList.add("hide")
})
