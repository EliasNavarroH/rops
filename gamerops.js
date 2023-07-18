
document.addEventListener("DOMContentLoaded", function () {
  let rock = document.querySelector(".rock");
  rock.addEventListener('click', function(){
    console.log("Button pressed")
    rpsGame("rock");
    determineWinner()
  });
 
  let paper = document.querySelector(".paper");
  paper.addEventListener('click', function(){
    console.log("Button pressed")
    rpsGame("paper");
    determineWinner()
  });

  let scissors = document.querySelector(".scissors");
  scissors.addEventListener('click', function(){
   console.log("Button pressed")
   rpsGame("scissors");
   determineWinner()
  });

});

let playerScore = 0;
let computerScore = 0;


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
        computerScore = computerScore + 1;
        playerScore = playerScore+ 1;
        console.log(playerScore);
        console.log(computerScore);
        return alert("Computer choose Rock!\n It's a Tie !")
    }
    else if (playerSelection == "rock" & computerSelection == "paper"){
        computerScore = computerScore + 1;
        console.log(playerScore);
        console.log(computerScore);
        return alert("Computer choose Paper!\n You loose, paper beats rock!")
    }
    else if (playerSelection == "rock" & computerSelection == "scissors"){
        playerScore = playerScore+ 1;
        console.log(playerScore);
        console.log(computerScore);
        return alert("Computer choose Scissors!\n You Win!, rock beats scissors")
    }
    else if (playerSelection == "paper" & computerSelection == "rock"){
        playerScore = playerScore+ 1;
        console.log(playerScore);
        console.log(computerScore);
        return alert("Computer choose Rock !\n You Win!, paper beats rock")
    }
    else if (playerSelection == "paper" & computerSelection == "paper"){
        computerScore = computerScore + 1;
        playerScore = playerScore+ 1;
        console.log(playerScore);
        console.log(computerScore);
        return  alert("Computer choose Paper!\n It's a Tie")
    }
    else if (playerSelection == "paper" & computerSelection == "scissors"){
        computerScore = computerScore + 1;
        console.log(playerScore);
        console.log(computerScore);
        return alert("Computer choose Scissors!\n You Loose!, scissors beats paper")
    }
    else if (playerSelection == "scissors" & computerSelection == "rock"){
        computerScore = computerScore + 1;
        console.log(playerScore);
        console.log(computerScore);
        return alert("Computer choose Rock!\n You Loose!, rock beats scissors")
    }
    else if (playerSelection == "scissors" & computerSelection == "paper"){
        playerScore = playerScore+ 1;
        console.log(playerScore);
        console.log(computerScore);
        return alert("You Win!, scissors beats paper")
    }
    else {
        computerScore = computerScore + 1;
        playerScore = playerScore+ 1;
        console.log(playerScore);
        console.log(computerScore);
        return alert("Its a Tie")
    }
    
    
}

function determineWinner(){
    if (playerScore + computerScore == 5){
        console.log("determineWinner() called after 5 games.");
        let gameScore = document.querySelector(".game-score");
        let count = document.createElement("p");
        let text
        if (playerScore > computerScore){
            text = document.createTextNode(`5 Games played:\n you scored: ${playerScore} and the computer: ${computerScore}`);
            count.appendChild(text);
        }
        else if (playerScore < computerScore){
            text = document.createTextNode(`5 Games played:\n you scored: ${playerScore} and the computer: ${computerScore}`);
            count.appendChild(text);
        }
        else {
            text = document.createTextNode("It's a Tie!");
            count.appendChild(text);
        }
        count.appendChild(text);
        gameScore.appendChild(count);
    }
}




