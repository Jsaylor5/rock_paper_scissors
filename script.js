const choices =  ["rock", "paper", "scissors"];

function computerPlay(){
   return choices[Math.floor(Math.random() * choices.length)];
}

function playerSelection(){
    return playerChoice = prompt("Please type rock, paper, or scissors").toLowerCase();
}

function playRound(playerSelection, computerPlay){

}
