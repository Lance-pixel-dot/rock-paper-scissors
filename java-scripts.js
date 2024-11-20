let humanScore = 0
let computerScore = 0

function getComputerChoice(){
   return Math.floor(Math.random() * 3)
}

function getHumanChoice(){
   return prompt("Enter you input").toLowerCase()
}

function playRound(humanChoice, computerChoice){

   computerChoice = getComputerChoice()
   humanChoice = getHumanChoice()

    if(computerChoice === 0){
        computerChoice = 'rock'
        if(humanChoice === 'scissor'){
            computerScore++
            return 'You lose!'
        }else if(humanChoice === computerChoice){
            return 'Draw!'
        }else{
            humanScore++
            return 'You win!'
        }
    }else if(computerChoice === 1){
        computerChoice = 'paper'
        if(humanChoice === 'rock'){
            computerScore++
            return 'You lose!'
        }else if(humanChoice === computerChoice){
            return 'Draw!'
        }else{
            humanScore++
            return 'You win!'
        }
    }else if(computerChoice === 2){
        computerChoice = 'scissor'
        if(humanChoice === 'paper'){
            computerScore++
            return 'You lose!'
        }else if(humanChoice === computerChoice){
            return 'Draw!'
        }else{
            humanScore++
            return 'You win!'
        }
    }

}

function playGame(){
    console.log('round 1: ')
    console.log(playRound())
    console.log('round 2: ')
    console.log(playRound())
    console.log('round 3: ')
    console.log(playRound())
    console.log('round 4: ')
    console.log(playRound())
    console.log('round 5: ')
    console.log(playRound())
    console.log('Scores: ')
    console.log(`Human Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)

    return 'Gamer Over!'
}

console.log(playGame())