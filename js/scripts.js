
var playerScore = 0
var computerScore = 0
  
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
        return 'Tie, please play again.'
    }
  switch(playerChoice.toLowerCase()){
      case "rock":
      if (computerChoice == "paper"){
          computerScore++;
          return "You lose. Paper covers rock. Computer score:" + computerScore;
      }
      else {
          playerScore++;
          return "You win. Rock beats scissors. Player score:" + playerScore;
      }
      break;

      case "paper":
      if (computerChoice == "scissors") {
          computerScore++;
          return "You lose. Scissors cuts paper. Computer score:" + computerScore;
      }
      else {
          playerScore++;
          return "You win. Paper covers rock. Player score:" + playerScore;
      }
      break;

      case "scissors":
      if(computerChoice == "rock"){
          computerScore++;
          return "You lose. Rock beats scissors. Computer score" + computerScore;
      }
      else {
          playerScore++;
          return "You win. Scissors cuts paper. Player score:" + playerScore;
      }
      break;
  }
  
}

function Game(){
   
    for (var i = 0; i<5; i++){
    let playerChoice = prompt("Rock, Paper, Scissors?")
    let computerChoice = computerPlay()
    console.log(playRound(playerChoice, computerChoice))
    }
    return "Final Player Score:" + playerScore;
    return "Final Computer Score:" + computerScore;

   
}

