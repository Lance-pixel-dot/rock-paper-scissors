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
const placeHolderImage = document.querySelector('.placeHolder');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

let playerSelection;
let rounds = 1;
let roundLimit = 6;


function getComputerChoice(){
   return Math.floor(Math.random() * 3)
}

function playRound(humanChoice, computerChoice){

   computerChoice = getComputerChoice()
   humanChoice = playerSelection;

   currentRnd.textContent = rounds;

   humanSlct.textContent = `${playerSelection}`;

    if(computerChoice === 0){

        computerChoice = 'rock';
        computerSlct.textContent = `${computerChoice}`;
        rock.style.display = 'block';
        placeHolderImage.style.display = 'none';

        if(humanChoice === 'scissor'){
            scissor.style.display = 'block';
            computerScore++
            roundResult.textContent = `You lose!`;
        }else if(humanChoice === computerChoice){
            rock.style.display = 'block';
            roundResult.textContent = 'Draw!';
        }else{
            humanScore++
            roundResult.textContent = 'You win!';
        }
                
    }else if(computerChoice === 1){

        computerChoice = 'paper'
        computerSlct.textContent = `${computerChoice}`;
        paper.style.display = 'block'
        placeHolderImage.style.display = 'none';

        if(humanChoice === 'rock'){
            rock.style.display = 'block';
            computerScore++ 
            roundResult.textContent = 'You lose!';
        }else if(humanChoice === computerChoice){
            roundResult.textContent = 'Draw!';
        }else{
            humanScore++
            roundResult.textContent = 'You win!';
        }

    }else if(computerChoice === 2){

        scissor.style.display = 'block';
        placeHolderImage.style.display = 'none';
        computerChoice = 'scissor'
        computerSlct.textContent = `${computerChoice}`;

        if(humanChoice === 'paper'){
            paper.style.display = 'block';
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

    continyu.style.display = 'block';
    choice.style.display = 'none';

    continyu.addEventListener('click', () => {
        continyu.style.display = 'none';
        choice.style.display = 'block';
        humanSlct.textContent = null;
        computerSlct.textContent = null;
        roundResult.textContent = null;
        currentRnd.textContent = rounds;
        gameResult();
    });
    
    rounds++;
}

function playGame(){

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

    continyu.style.display = 'none';

    start.addEventListener('click', () => {
        choice.style.display = 'block';
        start.style.display = 'none';
        currentRnd.textContent = rounds;
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
        humanScr.textContent = null;
        computerScr.textContent = null;
        currentRnd.textContent = rounds;
        roundResult.textContent = '';
        result.textContent = '';
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

