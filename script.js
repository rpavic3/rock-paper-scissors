

function getComputerChoice() {
    let rand = Math.random() * 3
    let round = Math.floor(rand)
    if (round === 0) {
        console.log("Computer has chosen rock")
        return "rock";
    }
    else if (round === 1) {
        console.log("Computer has chosen paper")
        return "paper";
    }
    else {
        console.log("Computer has chosen scissors")
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper or scissors?").toLowerCase();
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        console.log("Error: Invalid choice. Please choose rock, paper, or scissors.");
        return "error";
    } 
    console.log("You have chosen", humanChoice);
    return humanChoice;

}



function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "Tie! nobody beats anybody"
        }
        else if (humanChoice === "rock" && computerChoice ==="paper") {
            computerScore++
            return "Computer wins! paper beats rock!"
        }
        else if (humanChoice === "rock" && computerChoice ==="scissors") {
            humanScore++
            return "Player wins! rock beats scissors!"
        }
        else if (humanChoice === "paper" && computerChoice ==="rock") {
            humanScore++
            return "Player wins! paper beats rock!"
        }
        else if (humanChoice === "paper" && computerChoice ==="scissors") {
            computerScore++
            return "Computer wins! scissors beat paper!"
        }
        else if (humanChoice === "rock" && computerChoice ==="scissors") {
            humanScore++
            return "Player wins! rock beats scissors!"
        }
        else if (humanChoice === "rock" && computerChoice ==="paper") {
            computerScore++
            return "Computer wins! paper beats rock!"
        }
    }


    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        

        if (humanChoice === "error") {
            console.log("Invalid choice, round skipped.");
            i--; // Repeat the round if the player gives an invalid choice
            continue;
        }
    

        let result = playRound(humanChoice, computerChoice);
        console.log(result);

        console.log(`Current score - Player: ${humanScore}, Computer: ${computerScore}`);
    }
        if (humanScore > computerScore) {
            console.log(`You win the game! Final score - Player: ${humanScore}, Computer: ${computerScore}`);
        } else if (computerScore > humanScore) {
            console.log(`Computer wins the game! Final score - Player: ${humanScore}, Computer: ${computerScore}`);
        } else {
            console.log(`It's a tie! Final score - Player: ${humanScore}, Computer: ${computerScore}`);
        }
    


}

playGame()

