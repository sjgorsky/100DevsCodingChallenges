// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function hiOrBye(){
    let arr = [1,1,2,3,5,6]
    if(arr[0] > arr[arr.length-1]){
        console.log('Hi')
    } else {
        console.log('Bye')
    }
}
hiOrBye()
hiOrBye[7]='wut'//testing what happens if you add to an index that's length+2
console.log(hiOrBye[6])