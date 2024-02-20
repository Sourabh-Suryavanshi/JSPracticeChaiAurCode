let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guesseslot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];

let numGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) alert("Please Enter a valid number");
  else if (guess < 1) alert("Please enter a number more than 1");
  else if (guess > 100) alert("Please enter a number less than 100");
  else {
    prevGuess.push(guess);
    if (numGuesses === 10) {
      if (checkGuess(guess) != 0)
        displayMessage(`Game Over. Random number was ${randomNumber}`, "red");
      displayGuess(guess);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right. Number is ${guess}`, "green");
    endGame();
    return 0;
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`, "DodgerBlue");
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`, "Orange");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guesseslot.innerHTML += `${guess} `;
  remaining.innerHTML = `${10 - numGuesses}`;
  numGuesses++;
}

function displayMessage(message, type) {
  lowOrHi.innerHTML = `<h2 id = "color">${message}</h2>`;
  document.getElementById("color").style.color = type;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(randomNumber);
    prevGuess = [];
    numGuesses = 1;
    guesseslot.innerHTML = "";
    lowOrHi.innerHTML = "";
    remaining.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
    console.log(playGame);
  });
}
