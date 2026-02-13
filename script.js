const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const choicesBtns = document.querySelector(".choices");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
	const computerChoice = choices[Math.floor(Math.random() * 3)];
	let result = "";
	let messageWin = "YOU WIN";
	let messageLose = "YOU LOSE";
	let messageTie = "IT'S TIE";

	if (playerChoice === computerChoice) {
		result = messageTie;
		resultDisplay.textContent += result;
	} else {
		switch (playerChoice) {
			case "rock":
				result = computerChoice === "scissors" ? messageWin : messageLose;
				break;
			case "paper":
				result = computerChoice === "rock" ? messageWin : messageLose;
				break;
			case "scissors":
				result = computerChoice === "paper" ? messageWin : messageLose;
				break;
		}
	}

	playerDisplay.textContent = `PLAYER: ${playerChoice}`;
	computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
	resultDisplay.textContent = result;

	resultDisplay.classList.remove("win", "lose");

	switch (result) {
		case messageWin: {
			resultDisplay.classList.add("win");
			playerScore++;
			playerScoreDisplay.textContent = playerScore;
			break;
		}
		case messageLose: {
			resultDisplay.classList.add("lose");
			computerScore++;

			computerScoreDisplay.textContent = computerScore;
			break;
		}
	}

	if (playerScore === 3 || computerScore === 3) {
		const buttons = choicesBtns.querySelectorAll("button");
		buttons.forEach((button) => button.classList.add("disabled"));
	}
}
