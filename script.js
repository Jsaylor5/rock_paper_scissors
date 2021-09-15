const choices =  ["rock", "paper", "scissors"];
rock = choices[0]
paper = choices[1]
scissors = choices[2]

playerScore = 0
computerScore = 0

function checkScore(){
    if(playerScore == 5){document.getElementById("result").innerHTML ="";
    document.getElementById("result").innerHTML +=
    "<h2>Player wins!</h2>";
    resetGame();
    }

    else if(computerScore == 5){
        document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "<h2>Computer wins!</h2>"; 
        resetGame();
    }
}

function computerPlay(){
   return choices[Math.floor(Math.random() * choices.length)];
}

function playerSelection(playerInput){
    return playerInput;

}

function playRound(playerSelection, computerSelection){
  
    if (playerSelection === rock && computerSelection === rock){
        document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "<h2>tie</h2>";
    }
    else if (playerSelection === rock && computerSelection === paper){
        computerScore++
        document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "<h2>Paper beats rock</h2>";
    }
    else if (playerSelection === rock && computerSelection === scissors){
        playerScore++
        document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "<h2>Rock beats scissors</h2>";
    }
    else if (playerSelection === paper && computerSelection === paper){
        document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "<h2>tie</h2>";
    }
    else if (playerSelection === paper && computerSelection === scissors){
        computerScore++
        document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "<h2>Scissors cut paper</h2>";
        
    }
    else if (playerSelection === paper && computerSelection === rock){
        playerScore++
        document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "<h2>Paper beats rock</h2>";
        
    }
    else if (playerSelection === scissors && computerSelection === scissors){
        document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "<h2>tie</h2>";
    }
    else if (playerSelection === scissors && computerSelection === rock){
        computerScore++
       document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "<h2>Rock beats scissors</h2>";
    }
    else if (playerSelection === scissors && computerSelection === paper){
        playerScore++
        document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "<h2>Scissors cut paper</h2>";
    }

    let score = "player score: " + playerScore + " " + "computer score: " + computerScore
    document.getElementById("score").innerHTML = score;
    checkScore();
};

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    console.log(playRound(playerSelection(rock),computerPlay()));
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
   console.log(playRound(playerSelection(paper),computerPlay()));
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', ()=> {
    console.log(playRound(playerSelection(scissors), computerPlay()));
});



score = "player score: " + playerScore + " " + "computer score: " + computerScore
//second instance of score displays 0 and 0 at the beginning of the game instead of the DOM object

 const displayScore = document.querySelector('#score');

const playerScoreDisplay = document.createElement('div');
playerScoreDisplay.classList.add('playerScoreDisplay');
playerScoreDisplay.textContent = (score);
displayScore.appendChild(playerScoreDisplay);

function resetGame(){const resetButton = document.querySelector('#result');

const resetButtonDisplay = document.createElement('button');
resetButtonDisplay.classList.add('resetButtonDisplay');
resetButtonDisplay.textContent = "play again?"
resetButton.appendChild(resetButtonDisplay);
resetButton.addEventListener('click', () => {
    window.location.reload();
});
}