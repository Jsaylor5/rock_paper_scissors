const choices =  ["rock", "paper", "scissors"];
rock = choices[0]
paper = choices[1]
scissors = choices[2]

playerScore = 0
computerScore = 0


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
        "The winner is:<h2>tie</h2>";
    }
    else if (playerSelection === rock && computerSelection === paper){
        computerScore++
        document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "The winner is:<h2>Computer!</h2> Paper beats rock";
    }
    else if (playerSelection === rock && computerSelection === scissors){
        playerScore++
        document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "The winner is:<h2>You!</h2> Rock beats scissors";
    }
    else if (playerSelection === paper && computerSelection === paper){
        document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "The winner is:<h2>tie</h2>";
    }
    else if (playerSelection === paper && computerSelection === scissors){
        computerScore++
        document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "The winner is:<h2>Computer!</h2> Scissors cut paper";
        
    }
    else if (playerSelection === paper && computerSelection === rock){
        playerScore++
        document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "The winner is:<h2>You!</h2> Paper beats rock";
        
    }
    else if (playerSelection === scissors && computerSelection === scissors){
        document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "The winner is:<h2>tie</h2>";
    }
    else if (playerSelection === scissors && computerSelection === rock){
        computerScore++
       document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "The winner is:<h2>Computer!</h2> Rock beats scissors";
    }
    else if (playerSelection === scissors && computerSelection === paper){
        playerScore++
        document.getElementById("result").innerHTML ="";
        document.getElementById("result").innerHTML +=
        "The winner is:<h2>You!</h2> Scissors cut paper";
    }

    
    let score = "player score: " + playerScore + " " + "computer score: " + computerScore
    document.getElementById("score").innerHTML = score;
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
