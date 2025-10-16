let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const resetBtn = document.querySelector(".reset");
const themeBtn = document.querySelector(".theme");
const body = document.querySelector("body");

const compChoices = () => {
  const options = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return options[randomNum];
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Yaah! You win! ${userChoice} beats ${computerChoice}!`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `Oh no! Computer wins! ${computerChoice} beats ${userChoice}!`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
  const computerChoice = compChoices();

  if (userChoice === computerChoice) {
    msg.innerText = `Don't worry! It's a tie! You both chose ${userChoice}!`;
    msg.style.backgroundColor = "#fca311";
  } else {
    let userWin = false;
    if (userChoice === "rock") {
      userWin = computerChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "rock" ? true : false;
    } else {
      userWin = computerChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    playGame(userChoice);
  });
});

let currMode = "Light";
themeBtn.addEventListener("click", (evt) => {
  if (currMode === "Dark") {
    currMode = "Light";
    body.classList.add("light");
    body.classList.remove("dark");
  } else {
    currMode = "Dark";
    body.classList.add("dark");
    body.classList.remove("light");
  }
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = userScore;
    computerScorePara.innerText = computerScore;
    msg.innerText = "Make your move!";
    msg.style.backgroundColor = currMode === "Light" ? "#14213d" : "#ffffff";
});
