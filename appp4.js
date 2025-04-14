function printAboveAverage(numbers){
    let sum = 0;
for(let i=0; i < numbers.length; i++){
sum += numbers[i]
}
let average = sum/numbers.length
for(let i= 0; i < numbers.length; i++){
    if(numbers[i] > average){
    console.log(numbers[i])
    }
}
}

printAboveAverage([4, 8, 10, 3, 6])