// my guessing game

alert("Time to play the guessing game!")

let maximumValue  = parseInt(prompt("Enter maximum value:"))
while(!maximumValue){
    maximumValue  = parseInt(prompt("Enter maximum value:"))
}
// get random value between range
const randomValue = Math.floor(Math.random() * maximumValue) + 1

// get user guess and determine if they are correct
let userGuess = 123
let gameOn = true

while(gameOn){
    userGuess = parseInt(prompt("Enter your guess: "))

    while(!userGuess){
        userGuess = parseInt(prompt("Enter your guess: "))
    }

    if(userGuess > randomValue){
        alert("Your guess is too HIGH")
    }
    else if(userGuess < randomValue){
        alert("Your guess is too LOW")
    }
    else{
        alert(`BINGO! ${randomValue} = ${userGuess}`)
        gameOn = false
    }
}

alert("GAME OVER")