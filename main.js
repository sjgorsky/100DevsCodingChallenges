//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
function evenArray(){
    let arrNums = [1,2,3,4,5,6,7,8]

    for(let i=0;i<arrNums.length; i++){
        if(arrNums[i] % 2 === 0){
            console.log(arrNums[i])
        }
    }   
}
evenArray()