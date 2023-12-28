game();

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

function playRound(){
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Make a choice of rock, paper, scissors", "").toLowerCase();

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

function game() {
    let playerWins = 0;
    let computerWins = 0;

    while(Math.max(...wins) < 3) {

        let contest = playRound()

        console.log(contest);

        if (/Win/g.test(contest)) {
            playerWins++;
        } else if (/Lose/g.test(contest)) {
            computerWins++;
        }
    }

    console.log(`Player wins: ${playerWins}, Computer wins: ${computerWins}`)
}
