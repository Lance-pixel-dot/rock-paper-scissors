let humanScore = 0
let computerScore = 0

const choice = document.querySelector('#choices');
const humanSlct = document.querySelector('#humanSlct');
const computerSlct = document.querySelector('#computerSlct');
const roundResult = document.querySelector('#round');
const humanScr = document.querySelector('#humanScr');
const computerScr = document.querySelector('#computerScr');
const result = document.querySelector('#winner');

let playerSelection;
let rounds = 0;
let roundLimit = 5;


function getComputerChoice(){
   return Math.floor(Math.random() * 3)
}

function playRound(humanChoice, computerChoice){

   computerChoice = getComputerChoice()
   humanChoice = playerSelection;

   humanSlct.textContent = ` ${playerSelection}`;

    if(computerChoice === 0){

        computerChoice = 'rock'
        computerSlct.textContent = ` ${computerChoice}`;

        if(humanChoice === 'scissor'){
            computerScore++
            roundResult.textContent = `You lose!`;
        }else if(humanChoice === computerChoice){
            roundResult.textContent = 'Draw!';
        }else{
            humanScore++
            roundResult.textContent = 'You win!';
        }
                
    }else if(computerChoice === 1){

        computerChoice = 'paper'
        computerSlct.textContent = ` ${computerChoice}`;

        if(humanChoice === 'rock'){
            computerScore++
            roundResult.textContent = 'You lose!';
        }else if(humanChoice === computerChoice){
            roundResult.textContent = 'Draw!';
        }else{
            humanScore++
            roundResult.textContent = 'You win!';
        }

    }else if(computerChoice === 2){

        computerChoice = 'scissor'
        computerSlct.textContent = ` ${computerChoice}`;

        if(humanChoice === 'paper'){
            computerScore++
            roundResult.textContent = 'You lose!';
        }else if(humanChoice === computerChoice){
            roundResult.textContent = 'Draw!';
        }else{
            humanScore++
            roundResult.textContent = 'You win!';
        }

    }

    humanScr.textContent = humanScore;
    computerScr.textContent = computerScore;
}

function playGame(){

    choice.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.className){

       case 'rock':
           playerSelection = 'rock'
           playRound();
           break;
       case 'paper':
           playerSelection = 'paper'
           playRound();
           break;
       case 'scissor':
           playerSelection = 'scissor'
           playRound();
           break;

    }

   });

}

console.log(playGame());
