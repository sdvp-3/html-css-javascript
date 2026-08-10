let isAutoPlaying = false;
let intervalId;

let score = JSON.parse(localStorage.getItem("js-score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
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
  if (event.key === "r" || event.key === "R") {
    playGame("Rock");
  } else if (event.key === "p" || event.key === "P") {
    playGame("Paper");
  } else if (event.key === "s" || event.key === "S") {
    playGame("Scissors");
  } else if (event.key === "a" || event.key === "A") {
    autoPlay(); // Avtomat rejim mantiqi
  }
});

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  const playerImageSrc = moveImgs[playerMove];
  const computerImageSrc = moveImgs[computerMove];

  let result = "";

  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "Lost";
    } else if (computerMove === "Scissors") {
      result = "Win";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "Win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scissors") {
      result = "Lost";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "Lost";
    } else if (computerMove === "Paper") {
      result = "Win";
    } else if (computerMove === "Scissors") {
      result = "Tie";
    }
  }
  if (result === "Win") {
    score.wins += 1;
  } else if (result === "Lost") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("js-score", JSON.stringify(score));
  scores();
  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-move").innerHTML = `👤${playerImageSrc}
    VS
    ${computerImageSrc}💻`;
}

const moveImgs = {
  Rock: ' <img class="png-rock1" src="png/rock.png" />',
  Paper: ' <img class="png-paper1" src="png/paper.png" />',
  Scissors: ' <img class="png-scissors1" src="png/scisorss.png" />',
};

function scores() {
  document.querySelector(".js-score").innerHTML =
    `🏆:${score.wins},❌:${score.losses},🤝:${score.ties}`;
}
 
function pickComputerMove() {
  const randomNumber = Math.random();
  console.log(`Random number:${randomNumber}`);
  let computerMove = "";

  if (randomNumber > 0 && randomNumber < 0.33) {
    computerMove = "Rock";
  } else if (randomNumber > 0.33 && randomNumber < 0.66) {
    computerMove = "Paper";
  } else if (randomNumber > 0.66 && randomNumber < 0.99) {
    computerMove = "Scissors";
  }

  return computerMove;
}
