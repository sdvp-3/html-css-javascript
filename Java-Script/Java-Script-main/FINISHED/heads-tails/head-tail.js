//// flip coin game1
function resetScore() {
  score.won = 0;
  score.lost = 0;
  localStorage.setItem("score", JSON.stringify(score));
  document.querySelector(".js-result").innerHTML = "Won: 0, Lost: 0";
}

document.querySelector('.js-br').addEventListener('click', ()=>{
  resetScore()
})

const score = JSON.parse(localStorage.getItem("score")) || {
  won: 0,
  lost: 0,
};

document.querySelector('.js-head').addEventListener('click', ()=>{
  playGame('Heads')
});
document.querySelector('.js-tail').addEventListener('click', ()=>{
  playGame('Tails')
});

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='h'){
    playGame('Heads')
  }
});
document.body.addEventListener('keydown',(event)=>{
  if(event.key==='t'){
    playGame('Tails')
  }
})

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === computerMove) {
    score.won++;
    result = "You won: &#127942;";
  } else {
    score.lost++;
    result = "You lost: &#128681;";
  }

  document.querySelector(".js-show").innerHTML =
    `You : ${playerMove} - Computer:${computerMove}`;

  document.querySelector(".js-result").innerHTML =
    ` Won: ${score.won}, Lost: ${score.lost}`;

  document.querySelector(".result").innerHTML = `Result:${result}`;
}
localStorage.setItem("score", JSON.stringify(score));

function pickComputerMove() {
  const randomNum = Math.random();
  console.log(`Random Number: ${randomNum}`);

  if (randomNum < 0.5) {
    return "Heads";
  } else {
    return "Tails";
  }
}

//// flip coin game2

const btn = document.querySelector(".button2");

document.querySelector('.js-bf').addEventListener('click' , ()=>{
  flipCoin()
})

let currentDeg = 0;
btn.addEventListener("click", function () {
  let deg = Math.floor(Math.random() * 1440) + 1440;
  currentDeg += deg;
  console.log(`Random floor:${deg}`)

  document.querySelector(".coin").style.transform = `rotateX(${currentDeg}deg)`;

  setTimeout(() => {
    if (currentDeg % 720 < 360) {
      document.querySelector(".coin").innerHTML = "H";
    } else {
      document.querySelector(".coin").innerHTML = "T";
    }
    document.querySelector(".coin").style.transition = 0.6;
    document.querySelector(".coin").style.transform = `rotateX(0deg)`;
    currentDeg = 0;
    setTimeout(() => {
      document.querySelector(".coin").style.transition = "transform 0.9s ease";
    }, 10);
  }, 700);
});
