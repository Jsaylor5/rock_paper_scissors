const choices =  ["rock", "paper", "scissors"];
rock = choices[0]
paper = choices[1]
scissors = choices[2]

function computerPlay(){
   return choices[Math.floor(Math.random() * choices.length)];
}

function playerSelection(){
    return playerChoice = prompt("Please type rock, paper, or scissors").toLowerCase();
}

function playRound(playerSelection, computerPlay){
    if (playerSelection === rock && computerPlay === rock){
        return "tie";
    }
    else if (playerSelection === rock && computerPlay === paper){
        return " Computer wins, paper beats rock";
    }
    else if (playerSelection === rock && computerPlay === scissors){
        return "Player wins, rock beats scissors";
    }
    else if (playerSelection === paper && computerPlay === paper){
        return "tie";
    }
    else if (playerSelection === paper && computerPlay === scissors){
        return "Computer wins, scissors cut paper";
    }
    else if (playerSelection === paper && computerPlay === rock){
        return "Player wins, paper beats rock";
    }
    else if (playerSelection === scissors && computerPlay === scissors){
        return "tie";
    }
    else if (playerSelection === scissors && computerPlay === rock){
        return "Computer wins, rock beats scissors";
    }
    else if (playerSelection === scissors && computerPlay === paper){
        return "Player wins, scissors cut paper";
    }


}