
var playerScore = 0
var computerScore = 0


const start = document.querySelector('.play');
start.addEventListener('click', startGame);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => { button.addEventListener('click', (e) => {
    Game(button);
   console.log(button.className);
  });
});

  function computerPlay() {
    let randomvar = Math.random();

    if (randomvar <=0.3333) {
       Comp = "rock";
        }
      else if (randomvar < 0.6666){
       Comp = "paper";
      }
      else {
        Comp = "scissors";
      }

      return Comp;

}



function playRound(playerChoice, computerChoice) {

    if (playerChoice.toLowerCase() == computerChoice) {
        return alert('Tie, please play again.')
    }
  switch(playerChoice.toLowerCase()){
      case "rock":
      if (computerChoice == "paper"){
          computerScore++;
          return alert("You lose. Paper covers rock. Computer score:" + computerScore);
      }
      else {
          playerScore++;
          return alert("You win. Rock beats scissors. Player score:" + playerScore);
      }
      break;

      case "paper":
      if (computerChoice == "scissors") {
          computerScore++;
          return alert("You lose. Scissors cuts paper. Computer score:" + computerScore);
      }
      else {
          playerScore++;
          return alert("You win. Paper covers rock. Player score:" + playerScore);
      }
      break;

      case "scissors":
      if(computerChoice == "rock"){
          computerScore++;
          return alert("You lose. Rock beats scissors. Computer score" + computerScore);
      }
      else {
          playerScore++;
          return alert("You win. Scissors cuts paper. Player score:" + playerScore);
      }
      break;
  }
  
}



function Game(button){
  
    let playerChoice = button.className
    let computerChoice = computerPlay()
    console.log(playRound(playerChoice, computerChoice))
    console.log(playerScore);
    document.getElementById('playerScoreDiv').innerHTML = "Player Score:" +" " + playerScore;
    document.getElementById('compScoreDiv').innerHTML = "Computer Score:" +" " + computerScore;
    
    if (playerScore > 4 || computerScore > 4){
        if (playerScore > computerScore){
            const playerWinner = document.querySelector('#playerWinner');  
            playerWinner.textContent = "You Win!";
            playerScore = 0;
            computerScore = 0;
        } else {
            const compWinner = document.querySelector('#compWinner');
            compWinner.textContent = "You Lose!";
            playerScore = 0;
            computerScore = 0;
        }
   
   return;
    }
}


function startGame() {
    const playerWinner = document.querySelector('#playerWinner');  
    playerWinner.textContent = " ";
    const compWinner = document.querySelector('#compWinner');
    compWinner.textContent = " ";
    var btns = document.getElementById("buttons");
    if (btns.style.display === "none") {
        btns.style.display = "block";
    } else {
        btns.style.display = "none";
    }

   
}








