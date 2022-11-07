    let playerChoice = "";
    let computerChoice = "";
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;
    let res = "";
    const options = ["rock", "paper", "scissors"];

    const container = document.querySelector(".container");
    const rockbtn = document.getElementsByClassName("rock");
    const paperbtn = document.getElementsByClassName("paper");
    const scissorsbtn = document.getElementsByClassName("scissors");
    const result = document.createElement('p');
    const csdisplay = document.getElementsByClassName("computer-score");
    const psdisplay = document.getElementsByClassName("player-score");

    function chooseRock () {
        playerChoice = "rock";
        return playerChoice;
    }

    function choosePaper () {
        playerChoice = "paper";
        return playerChoice;
    }

    function chooseScissors () {
        playerChoice = "scissors";
        return playerChoice;
    }

    // compare scores and declare winner
    function declareWinner () {
        if (playerScore > computerScore)
            result.textContent = "Great, You won the game! 🥳";
        else if (computerScore > playerScore)
            result.textContent = "GAME OVER. You lost 🥲";
        else
            result.textContent = "STALEMATE! It was a tie 😐!";
    }

    function addPlayAgain () {
        const playAgain = document.createElement('button');
        playAgain.classList.add("playAgain");
        playAgain.textContent = "Play Again";
        playAgain.addEventListener("click", resetGame);
        container.appendChild(playAgain);
    }

    function resetGame () {
        result.textContent = "";
        const playAgain = document.querySelector(".playAgain");
        container.removeChild(playAgain);
        rounds = 0;
        csdisplay[0].textContent = `Computer Score: ${computerScore}`;
        psdisplay[0].textContent = `Player Score: ${playerScore}`;
    }

    function playRound() {
        computerChoice = options[Math.floor(Math.random() * 3)]; 

        if (playerChoice === computerChoice) {
            res = "TIE!";
        }

        if (playerChoice === "rock" && computerChoice === "paper") {
            computerScore += 1;
            res = "Computer wins this round!";
        }

        if (playerChoice === "paper" && computerChoice === "scissors") {
            computerScore += 1;
            res = "Computer wins this round!";
        }

        if (playerChoice === "scissors" && computerChoice === "rock") {
            computerScore += 1;

        }

        if (playerChoice === "paper" && computerChoice === "rock") {
            playerScore += 1;
            res = "You won this round!";
        }

        if (playerChoice === "rock" && computerChoice === "scissors") {
            playerScore += 1;
            res = "You won this round!";
        }

        if (playerChoice === "scissors" && computerChoice === "paper") {
            playerScore += 1;
            res = "You won this round!"; 
        }

        result.textContent = `Result: ${res}`;
        result.classList.add("result");
        container.appendChild(result);
        rounds++;
        csdisplay[0].textContent = `Computer Score: ${computerScore}`;
        psdisplay[0].textContent = `Player Score: ${playerScore}`;

        if (rounds === 5) {
            declareWinner(); 
            playerScore = 0;
            computerScore = 0;
            addPlayAgain();   
        }

        // resets game if player continues after 5 rounds
        if (rounds > 5) {
            resetGame();
        }

    }

    rockbtn[0].addEventListener("click", () => {
        chooseRock();
        playRound();
    });

    paperbtn[0].addEventListener("click", () => {
        choosePaper();
        playRound();
    });

    scissorsbtn[0].addEventListener("click", () => {
        chooseScissors();
        playRound();
    });
