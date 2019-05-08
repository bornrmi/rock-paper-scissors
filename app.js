let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function convertTo(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";

}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML =computerScore;
	const smallUserWord = 'User'.fontsize(2).sub();
	const smallCompWord = 'Comp'.fontsize(2).sub();
	result_p.innerHTML = `${convertTo(userChoice)} ${smallUserWord} beats ${convertTo(computerChoice)} ${smallCompWord}. You win!`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
}


function lose(userChoice, computerChoice) {
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML =computerScore;
	const smallUserWord = 'User'.fontsize(2).sub();
	const smallCompWord = 'Comp'.fontsize(2).sub();
	result_p.innerHTML = `${convertTo(computerChoice)} ${smallCompWord} beats ${convertTo(userChoice)} ${smallUserWord}. You lose!`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300);
}


function draw(userChoice, computerChoice) {
	const smallUserWord = 'User'.fontsize(2).sub();
	const smallCompWord = 'Comp'.fontsize(2).sub();
	result_p.innerHTML = `${convertTo(computerChoice)} ${smallCompWord} equals ${convertTo(userChoice)} ${smallUserWord}. Its a draw!`;
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 300);
}


function game(userChoice) {
	const computerChoice = getComputerChoice();
	
	switch (userChoice + computerChoice) {
		case "pr":
		case "sp":
		case "rs":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "pp":
		case "ss":
		case "rr":
			draw(userChoice, computerChoice);
			break;
	}
} 


function main() {
	rock_div.addEventListener("click", () => game("r"));

	paper_div.addEventListener("click", () => game("p"));

	scissors_div.addEventListener("click", () => game("s"));
}

main();