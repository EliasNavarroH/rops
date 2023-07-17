
document.addEventListener("DOMContentLoaded", function () {
  let rock = document.querySelector(".rock");
  rock.addEventListener('click', function(){
    rpsGame("rock");
  });
 
  let paper = document.querySelector(".paper");
  paper.addEventListener('click', function(){
    rpsGame("paper");
  });

  let scissors = document.querySelector(".scissors");
  scissors.addEventListener('click', function(){
  rpsGame("scissors");
  });

});


function getComputerChoice(){
    let game = Math.floor(Math.random()*3);
    if (game == 0){
        return("Rock").toLowerCase();
    }else if (game == 1) {
        return("Paper").toLowerCase();
    }else {
        return("Scissors").toLowerCase();
    }
}
 
function rpsGame(playerSelection, computerSelection){
    
    computerSelection = getComputerChoice()

    if (playerSelection == "rock" & computerSelection == "rock"){
        return alert("Its a Tie")
    }
    else if (playerSelection == "rock" & computerSelection == "paper"){
        return alert("You loose, paper beats rock!")
    }
    else if (playerSelection == "rock" & computerSelection == "scissors"){
        return alert("You Win!, rock beats scissors")
    }
    else if (playerSelection == "paper" & computerSelection == "rock"){
        return alert("You Win!, paper beats rock")
    }
    else if (playerSelection == "paper" & computerSelection == "paper"){
        return  alert("Its a Tie")
    }
    else if (playerSelection == "paper" & computerSelection == "scissors"){
        return alert("You Loose!, scissors beats paper")
    }
    else if (playerSelection == "scissors" & computerSelection == "rock"){
        return alert("You Loose!, rock beats scissors")
    }
    else if (playerSelection == "scissors" & computerSelection == "paper"){
        return alert("You Win!, scissors beats paper")
    }
    else {
        return alert("Its a Tie")
    }
}

function game(){
    let gameCounts = 0;
    for (gameCounts = 0;gameCounts < 5; gameCounts++){
        console.log(rpsGame());
    }
} 

console.log(game());

