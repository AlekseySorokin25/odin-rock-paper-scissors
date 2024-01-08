const buttons = document.querySelectorAll("#button");
const currentResult = document.querySelector(".currentResult");
const score = document.querySelector(".score");
let playerWins = 0;
let computerWins = 0;

buttons.forEach( button => button.addEventListener("click", () => {
    let playerSelection = button.textContent;

    currentResult.textContent = playRound(playerSelection);
    score.textContent = `Player wins: ${playerWins}, Computer wins: ${computerWins}`;

    if (Math.max(playerWins, computerWins) === 5) {
        playerWins = 0;
        computerWins = 0;
    };
}));


// game();

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

function playRound(playerSelection){


    const computerSelection = getComputerChoice();



    // if(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") return "Your choice incorect";

    if (playerSelection === computerSelection) return `Draw, ${playerSelection} and ${computerSelection}`;

    let gameRules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    }

    if (computerSelection === gameRules[playerSelection]){
        playerWins++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
        
    }
    else{
        computerWins++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }    
}

// function game() {


//     if (Math.max(playerWins, computerWins) > 5) {
//         playerWins = 0;
//         computerWins = 0;
//     };

//         let contest = playRound()

//         // console.log(contest);

//         if (/Win/g.test(contest)) {
//             playerWins++;
//         } else if (/Lose/g.test(contest)) {
//             computerWins++;
//         }


//     return `Player wins: ${playerWins}, Computer wins: ${computerWins}`;
// }
