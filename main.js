// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let affirm = 'Hey, you\'re doing the work and I\'m proud of you.'
for (let i=0;i<4;i++){
    console.log(affirm)
}
//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it 
let arrLetters = ['a', 'b', 'c', 'd', 'e', 'f']
let arrJoined = arrLetters.join('')
console.log(arrJoined)
// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function lizard(){
    let choices = Math.random()
    if (choices < .33){
        return 'rock'
    } else if(choices < .67){
        return 'paper'
    } else {
        return 'scissors'
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function
function gamePlay(toss){
    let botChoice = lizard()
    if ((toss === 'rock' && botChoice === 'scissors') || (toss ==='paper' && botChoice==='rock') || (toss ==='scissors' && botChoice==='paper')){
        console.log('You win!')
    } else if(toss===botChoice){
        console.log('It\'s a tie!')
    } else {
        console.log('Take the L, brother')
    }
}
gamePlay('rock')