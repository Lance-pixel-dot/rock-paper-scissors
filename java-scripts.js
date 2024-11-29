let humanScore = 0
let computerScore = 0

const choice = document.querySelector('#choices');
const humanSlct = document.querySelector('#humanSlct');
const computerSlct = document.querySelector('#computerSlct');
const roundResult = document.querySelector('#result');
const humanScr = document.querySelector('#humanScr');
const computerScr = document.querySelector('#computerScr');
const result = document.querySelector('#winner');
const currentRnd = document.querySelector('#round');
const start = document.querySelector('#start');
const restart = document.querySelector('#restart');

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

   rounds++;
   currentRnd.textContent = rounds;
   console.log(rounds);

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

    gameResult();
}

function playGame(){

    rounds++;
    currentRnd.textContent = rounds;

    choice.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.className){

       case 'gameButton rock':
           playerSelection = 'rock'
           playRound();
           break;
       case 'gameButton paper':
           playerSelection = 'paper'
           playRound();
           break;
       case 'gameButton scissor':
           playerSelection = 'scissor'
           playRound();
           break;

    }

   });

}

function gameMenu(){

    start.addEventListener('click', () => {
        playGame();
        choice.style.display = 'block';
        start.style.display = 'none';
    });

    restart.addEventListener('click', () => {
        choice.style.display = 'block';
        restart.style.display = 'none';

        humanSlct.textContent = '';
        computerSlct.textContent = '';
        humanScr.textContent = null;
        computerScr.textContent = null;
        humanScore = 0;
        computerScore = 0;
        rounds = 0;
        currentRnd.textContent = rounds;
        roundResult.textContent = '';
        result.textContent = '';

        playGame();
    })
    
}

function gameResult(){

    if(rounds === roundLimit && computerScore > humanScore){
        result.textContent = 'Computer Wins!';
        currentRnd.textContent = 'Game Finish!';
        choice.style.display = 'none';
        restart.style.display = 'block';
        gameMenu();
    }else if(rounds === roundLimit && humanScore > computerScore){
        result.textContent = 'You Win!';
        currentRnd.textContent = 'Game Finish!';
        choice.style.display = 'none';
        restart.style.display = 'block';
        gameMenu();
    }else if(rounds === roundLimit && humanScore === computerScore){
        result.textContent = 'Tie no Winner!';
        currentRnd.textContent = 'Game Finish!';
        choice.style.display = 'none';
        restart.style.display = 'block';
        gameMenu();
    }
}

gameMenu();
