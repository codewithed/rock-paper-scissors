let playerChoice = null;
    let computerChoice = null;
    let playerScore = null;
    let computerScore = null;
    const options = ["rock", "paper", "scissors"];

    game();

    function getPlayerChoice () {
        playerChoice = prompt("Enter your choice: ");
        playerChoice = playerChoice.toLowerCase();

        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {    
            return playerChoice;
        }
        else {
            console.log("Enter a valid choice");
            getPlayerChoice();
        }
    }

    // random selection of rock paper scissors for computer
    function getComputerChoice() {
        computerChoice = options[Math.floor(Math.random() * 3)];    
        return computerChoice;
        console.log("Computer chose " + computerChoice);
    }


    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            console.log("Tie");
        }
        if (playerChoice === "rock" && computerChoice === "paper") {
            computerScore += 1;
            console.log("Computer wins this round!");
            return computerScore;
        }
        if (playerChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1;
            console.log("Computer wins this round!");
            return computerScore;
        }
        if (playerChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1;
            console.log("Computer wins this round!");
            return computerScore;
        }
        if (playerChoice === "paper" && computerChoice === "rock") {
            playerScore += 1;
            console.log("You won this round!");
            return playerScore;
        }
        if (playerChoice === "rock" && computerChoice === "scissors") {
            playerScore += 1;
            console.log("You won this round!");
            return playerScore;
        }
        if (playerChoice === "scissors" && computerChoice === "paper") {
            playerScore += 1;
            console.log("You won this round!");
            return playerScore;
        }
    }

    function game() {
        console.log("Welcome to rock paper scissors!");
        for (let i = 0; i < 5; i++) {
            getPlayerChoice();
            getComputerChoice();
            playRound(playerChoice, computerChoice);
        }

        // compare scores and declare winner
        if (playerScore > computerScore)
            console.log("You are the winner! 🥳");
        else if (computerScore > playerScore)
            console.log("Computer wins ☹️");
    }