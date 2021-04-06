// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let str = 'Is this a sentence'
if (str = str.endsWith('?')) {
    console.log('That\'s a question!')
} else {
    console.log('Nope, not an iterrogative')
}
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multipleWords = 'You are a jr. dev miracle!'
let replacement = multipleWords.replaceAll('jr. dev','software engineering')
console.log(replacement)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let picker = Math.random()
    if (picker < .33){
        return "rock"
    } else if (picker < .67) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function rpsChoice(choice){
    let botChoice = rockPaperScissors()
    if ((choice === 'rock' && botChoice === 'scissors') || (choice ==='paper' && botChoice ==='rock')|| (choice === 'scissors' && botChoice === 'paper')){
        console.log('You won!')
    } else if (choice === botChoice) {
            console.log('It\'s a tie!')
        } else {
            console.log('You lose, Dr. Jones!')
        }
    }
    rpsChoice('rock')
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
