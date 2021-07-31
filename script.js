const choices =  ["rock", "paper", "scissors"];
rock = choices[0]
paper = choices[1]
scissors = choices[2]

playerScore = 0
computerScore = 0


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
        computerScore++
        return " Computer wins, paper beats rock";
    }
    else if (playerSelection === rock && computerSelection === scissors){
        playerScore++
        return "Player wins, rock beats scissors";
    }
    else if (playerSelection === paper && computerSelection === paper){
        return "tie";
    }
    else if (playerSelection === paper && computerSelection === scissors){
        computerScore++
        return "Computer wins, scissors cut paper";
        
    }
    else if (playerSelection === paper && computerSelection === rock){
        playerScore++
        return "Player wins, paper beats rock";
        
    }
    else if (playerSelection === scissors && computerSelection === scissors){
        return "tie";
    }
    else if (playerSelection === scissors && computerSelection === rock){
        computerScore++
        return "Computer wins, rock beats scissors";
    }
    else if (playerSelection === scissors && computerSelection === paper){
        playerScore++
        return "Player wins, scissors cut paper";
    }


}
function game(){
    for (let i = 0; i < 5; i++){
    playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}
score = "player score: " + playerScore + " " + "computer score: " + computerScore
alert(score)
if (playerScore > computerScore){
    return "You win";
}
else if (playerScore == computerScore){
    return "you tied"
}
else {
    return "you lose";
}

}