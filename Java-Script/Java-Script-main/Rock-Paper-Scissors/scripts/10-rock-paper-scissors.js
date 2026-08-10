
     let score =JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0,
      }

      function playGame(playerMove) {

      const computerMove = pickComputerMove();

      let result = '';

       if (playerMove==="✌️") {
        if (computerMove === "✌️") {
        result = "🤝";
       } else if (computerMove === "🫲") {
        result =  "🏆";
       } else if (computerMove === "✊") {
        result = "❌";
       }
      } else if (playerMove==="🫲") {
         if (computerMove === "🫲") {
        result = "🤝";
      } else if (computerMove === "✊") {
        result = "🏆";
      } else if (computerMove === "✌️") {
        result = "❌";
      }
      } else if (playerMove==="✊") {
         if (computerMove === "✊") {
        result = "🤝";
      } else if (computerMove === "🫲") {
        result = "❌";
      } else if (computerMove === "✌️") {
        result = "🏆";
     } 
      } if (result === "🏆") {
        score.wins+=1;
      } else  if (result ==="❌") {
        score.losses+=1;
      } else if (result ==="🤝") {
        score.ties+=1;
      }
     localStorage.setItem('score' ,JSON.stringify(score));
        updateScore()
          document.querySelector('.js-result')
          .innerHTML=result;

          document.querySelector('.js-move').innerHTML=`👤:${playerMove}-${computerMove}:🖥️`;
      }
      function updateScore(){
          document.querySelector('.js-score')
      .innerHTML=`🏆:${score.wins},❌:${score.losses},🤝:${score.ties}`
         }
         function updateResult(){
      
         document.querySelector('.js-result')
        .innerHTML=(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
       
         } 
      function pickComputerMove( ) {
          const randomNumber = Math.random();
       let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = '✊';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = '🫲';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = '✌️';
      }
      return computerMove;
      }