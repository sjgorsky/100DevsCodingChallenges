//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1,2,3,4,45]
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.reduce(reducer))
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareOriginal(arr){
    let newArr = arr.map(x => x**2)
    console.log(newArr)
}
squareOriginal([3,4,5])
//Create a function that takes string
//Print the reverse of that string to the console
function stringReverse(str){
    console.log(str.split('').reverse().join(''))
}
stringReverse('Why hello there!')
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindromeCheck(str){
    let strReverser=str.split('').reverse().join('')
    if (str == strReverser){
        alert('That\'s a palindrome!')
    }
}
palindromeCheck('not')