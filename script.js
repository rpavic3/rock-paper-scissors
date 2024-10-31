const scores = document.querySelector(".scores")
const compcho = document.createElement("p")
const domResult = document.createElement("p")
const playcho = document.createElement("p")
const curScore = document.createElement("p")
const winner = document.createElement("p")

function getComputerChoice() {

    let rand = Math.random() * 3
    let round = Math.floor(rand)
    

    if (round === 0) {
        compcho.textContent = "Computer has chosen rock"
        scores.appendChild(compcho)
        console.log("Computer has chosen rock")
        return "rock";
    }
    else if (round === 1) {
        compcho.textContent = "Computer has chosen paper"
        scores.appendChild(compcho)
        console.log("Computer has chosen paper")
        return "paper";
    }
    else {
        compcho.textContent = "Computer has chosen scissors"
        scores.appendChild(compcho)
        console.log("Computer has chosen scissors")
        return "scissors";
    }
}


let humanScore = 0
let computerScore = 0


function playGame(humanChoice) {
    scores.textContent = ""
    playcho.textContent = `Player has chosen ${humanChoice}`
    scores.appendChild(playcho)




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
        else if (humanChoice === "scissors" && computerChoice ==="rock") {
            humanScore++
            return "Computer wins! rock beats scissors!"
        }
        else if (humanChoice === "scissors" && computerChoice ==="paper") {
            computerScore++
            return "Player wins! scissors beat paper!"
        }
    }

        const computerChoice = getComputerChoice()
        
    

        let result = playRound(humanChoice, computerChoice);
        domResult.textContent = result
        scores.appendChild(domResult)

        console.log(result);

        console.log(`Current score - Player: ${humanScore}, Computer: ${computerScore}`);
    
        if (humanScore > computerScore) {
            console.log(`You win the game! Final score - Player: ${humanScore}, Computer: ${computerScore}`);
        } else if (computerScore > humanScore) {
            console.log(`Computer wins the game! Final score - Player: ${humanScore}, Computer: ${computerScore}`);
        } else {
            console.log(`It's a tie! Final score - Player: ${humanScore}, Computer: ${computerScore}`);
        }
    

    curScore.textContent = `Current score - Player: ${humanScore} Computer: ${computerScore}`
    scores.appendChild(curScore)

    if (humanScore === 5) {
        winner.textContent = "Player wins!!!"
        scores.appendChild(winner)
    }

    if (computerScore === 5) {
        winner.textContent = "Computer wins!!!"
        scores.appendChild(winner)
    }
}

document.querySelector("#rock").addEventListener("click", () => playGame("rock"))

document.querySelector("#paper").addEventListener("click", () => playGame("paper"))

document.querySelector("#scissors").addEventListener("click", () => playGame("scissors"))


