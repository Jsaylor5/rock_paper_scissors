const choices =  ["rock", "paper", "scissors"];
rock = choices[0]
paper = choices[1]
scissors = choices[2]

computerScore = []
playerScore = []

function computerPlay(){
   return choices[Math.floor(Math.random() * choices.length)];
}

function playerPlay(){
    return prompt("Please type rock, paper, or scissors").toLowerCase();
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === rock && computerSelection === rock){
        return "tie";
    }
    else if (playerSelection === rock && computerSelection === paper){
        return " Computer wins, paper beats rock";
    }
    else if (playerSelection === rock && computerSelection === scissors){
        return "Player wins, rock beats scissors";
    }
    else if (playerSelection === paper && computerSelection === paper){
        return "tie";
    }
    else if (playerSelection === paper && computerSelection === scissors){
        return "Computer wins, scissors cut paper";
    }
    else if (playerSelection === paper && computerSelection === rock){
        return "Player wins, paper beats rock";
    }
    else if (playerSelection === scissors && computerSelection === scissors){
        return "tie";
    }
    else if (playerSelection === scissors && computerSelection === rock){
        return "Computer wins, rock beats scissors";
    }
    else if (playerSelection === scissors && computerSelection === paper){
        return "Player wins, scissors cut paper";
    }


}
function game(){
    for (let i = 0; i < 5; i++){
    playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}
}