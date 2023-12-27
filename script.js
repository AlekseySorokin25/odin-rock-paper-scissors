
const computerSelection = getComputerChoice();
const playerSelection = prompt("Make a choice of rock, paper, scissors", "").toLowerCase();

console.log(playRound(playerSelection, computerSelection));

function getComputerChoice() {

    switch(Math.floor(Math.random() * 3 + 1)) {
        case 1: 
            return "rock";
        case 2: 
            return "paper";
        case 3: 
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection){

    if(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") return "Your choice incorect";

    if (playerSelection === computerSelection) return `Draw, ${playerSelection} and ${computerSelection}`;

    let gameRules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    }

    if (computerSelection === gameRules[playerSelection]){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }    
}