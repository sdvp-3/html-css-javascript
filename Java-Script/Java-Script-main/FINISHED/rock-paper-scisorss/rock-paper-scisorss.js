let isAutoPlaying = false;
let intervalId;

let score = JSON.parse(localStorage.getItem("js-score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

const moveImgs = {
  Rock: '<img class="png-rock1" src="png/rock.png" />',
  Paper: '<img class="png-paper1" src="png/paper.png" />',
  Scissors: '<img class="png-scissors1" src="png/scisorss.png" />',
};

// Kim nimani yutishini oldindan belgilab qo'yamiz.
const winningRules = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

const keyMap = {
  r: "Rock",
  p: "Paper",
  s: "Scissors",
};

document.querySelector(".js-rock").addEventListener("click", () => {
  playGame("Rock");
});

document.querySelector(".js-paper").addEventListener("click", () => {
  playGame("Paper");
});

document.querySelector(".js-scissors").addEventListener("click", () => {
  playGame("Scissors");
});

document.querySelector(".js-auto").addEventListener("click", autoPlay);

document.body.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  const move = keyMap[key];

  if (move) {
    playGame(move);
  } else if (key === "a") {
    autoPlay();
  }
});

function pickComputerMove() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  const result = getGameResult(playerMove, computerMove);

  updateScore(result);
  saveScore();
  updateGameDisplay(playerMove, computerMove, result);
}

function getGameResult(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return "Tie";
  }

  return winningRules[playerMove] === computerMove ? "Win" : "Lost";
}

function updateScore(result) {
  if (result === "Win") {
    score.wins += 1;
  } else if (result === "Lost") {
    score.losses += 1;
  } else {
    score.ties += 1;
  }
}

function saveScore() {
  localStorage.setItem("js-score", JSON.stringify(score));
}

function updateGameDisplay(playerMove, computerMove, result) {
  document.querySelector(".js-result").textContent = result;

  document.querySelector(".js-move").innerHTML = `
    👤 ${moveImgs[playerMove]} VS ${moveImgs[computerMove]} 💻
  `;

  updateScoreDisplay();
}

function autoPlay() {
  if (isAutoPlaying) {
    clearInterval(intervalId);
    isAutoPlaying = false;
    return;
  }

  intervalId = setInterval(() => {
    playGame(pickComputerMove());
  }, 1000);

  isAutoPlaying = true;
}

function updateScoreDisplay() {
  document.querySelector(".js-score").textContent =
    `🏆: ${score.wins}, ❌: ${score.losses}, 🤝: ${score.ties}`;
}

updateScoreDisplay();
