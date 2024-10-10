let humanScore = 0
let computerScore = 0


function getComputerChoice() {
    let rand = Math.random() * 3
    let round = Math.floor(rand)
    if (round === 0) {
        return "rock";
    }
    else if (round === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    return console.log(prompt("rock, paper or scissors?").toLowerCase())
}

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

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()


playRound()