//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['Knight Rider', 'JTV', 'Frasier', 'Mad Men']
    tvShows.forEach((x,i) => (console.log(x)))


//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let numArr = [3,4,5,6,7,8]
function getEven(arr){
    return arr.filter(x => x % 2 == 0)
}

console.log(getEven(numArr))


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number 
function secondTake(arr){
    let sorted = arr.sort((a,b)=>a-b)
    alert(sorted[1] + sorted[sorted.length-2])
}
secondTake([4,5,6,7,8])