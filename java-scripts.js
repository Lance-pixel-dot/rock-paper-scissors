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
const continyu = document.querySelector('#continue');
const hRock = document.querySelector('.hRock');
const hPaper = document.querySelector('.hPaper');
const hScissor = document.querySelector('.hScissor');
const cRock = document.querySelector('.cRock');
const cPaper = document.querySelector('.cPaper');
const cScissor = document.querySelector('.cScissor');
const hPlaceHolder = document.querySelector('.hPlaceHolder');
const cPlaceHolder = document.querySelector('.cPlaceHolder');
const hSContainer = document.querySelector('#hum-container');
const cSContainer = document.querySelector('#comp-container');

let playerSelection;
let rounds = 1;
let roundLimit = 6;

function getComputerChoice(){
   return Math.floor(Math.random() * 3)
}

function playRound(humanChoice, computerChoice){

   hPlaceHolder.style.display = 'none';
   cPlaceHolder.style.display = 'none';

   computerChoice = getComputerChoice()
   humanChoice = playerSelection;

   currentRnd.textContent = `Round ${rounds}`;

   humanSlct.textContent = `${playerSelection.toUpperCase()}`;

    if(computerChoice === 0){     

        cRock.style.display = 'block';
        computerChoice = 'rock';
        computerSlct.textContent = `${computerChoice.toUpperCase()}`;

        if(humanChoice === 'scissor'){
            computerScore++;
            roundResult.textContent = `computer +1!`;
        }else if(humanChoice === computerChoice){
            roundResult.textContent = 'Draw!';
        }else{
            humanScore++
            roundResult.textContent = 'You +1!';
        }
                
    }else if(computerChoice === 1){

        cPaper.style.display = 'block';
        computerChoice = 'paper';
        computerSlct.textContent = `${computerChoice.toUpperCase()}`;

        if(humanChoice === 'rock'){
            computerScore++
            roundResult.textContent = 'computer +1!';
        }else if(humanChoice === computerChoice){
            roundResult.textContent = 'Draw!';
        }else{
            humanScore++
            roundResult.textContent = 'You +1!';
        }

    }else if(computerChoice === 2){

        cScissor.style.display = 'block';
        computerChoice = 'scissor';
        computerSlct.textContent = `${computerChoice.toUpperCase()}`;

        if(humanChoice === 'paper'){
            computerScore++
            roundResult.textContent = 'computer +1!';
        }else if(humanChoice === computerChoice){
            roundResult.textContent = 'Draw!';
        }else{
            humanScore++
            roundResult.textContent = 'You +1!';
        }

    }

    humanScr.textContent = humanScore;
    computerScr.textContent = computerScore;

    continyu.style.display = 'block';
    choice.style.display = 'none';

    continyu.addEventListener('click', () => {
        continyu.style.display = 'none';
        choice.style.display = 'block';
        humanSlct.textContent = null;
        computerSlct.textContent = null;
        roundResult.textContent = null;
        currentRnd.textContent = `Round ${rounds}`;
        hPlaceHolder.style.display = 'block';
        cPlaceHolder.style.display = 'block';
        hRock.style.display = 'none';
        hPaper.style.display = 'none';
        hScissor.style.display = 'none';
        cPaper.style.display = 'none';
        cRock.style.display = 'none';
        cScissor.style.display = 'none';

        gameResult();
    });
    
    rounds++;
}

function playGame(){

    choice.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.className){

       case 'gameButton rock':
           hRock.style.display = 'block';
           playerSelection = 'rock'
           playRound();
           break;
       case 'gameButton paper':
           hPaper.style.display = 'block';
           playerSelection = 'paper'
           playRound();
           break;
       case 'gameButton scissor':
           hScissor.style.display = 'block';
           playerSelection = 'scissor'
           playRound();
           break;

    }

   });

}

function gameMenu(){

    continyu.style.display = 'none';

    start.addEventListener('click', () => {
        choice.style.display = 'block';
        start.style.display = 'none';
        currentRnd.textContent = `Round ${rounds}`;
        hSContainer.style.display = 'block';
        cSContainer.style.display = 'block';
        playGame();
    });

    restart.addEventListener('click', () => {
        
        choice.style.display = 'block';
        restart.style.display = 'none';
    
        humanScore = 0;
        computerScore = 0;
        rounds = 1;

        humanSlct.textContent = '';
        computerSlct.textContent = '';
        humanScr.textContent = humanScore;
        computerScr.textContent = computerScore;
        currentRnd.textContent = `Round ${rounds}`;
        roundResult.textContent = '';
        result.textContent = '';
    })
}

function gameResult(){

    if(rounds === roundLimit && computerScore > humanScore){
        result.style.display = 'block';
        result.textContent = 'Computer Wins!';
        currentRnd.textContent = 'Game Finish!';
        choice.style.display = 'none';
        restart.style.display = 'block';
        gameMenu();
    }else if(rounds === roundLimit && humanScore > computerScore){
        result.style.display = 'block';
        result.textContent = 'You Win!';
        currentRnd.textContent = 'Game Finish!';
        choice.style.display = 'none';
        restart.style.display = 'block';
        gameMenu();
    }else if(rounds === roundLimit && humanScore === computerScore){
        result.style.display = 'block';
        result.textContent = 'Tie no Winner!';
        currentRnd.textContent = 'Game Finish!';
        choice.style.display = 'none';
        restart.style.display = 'block';
        gameMenu();
    }

}

gameMenu();

