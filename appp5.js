let array=[1,4,2,9,-3,10]
function printMinMax(array){
    let min=array[0]
    let max=array[0]
    for(let i=0; i < array.length; i++){
        if(array[i] < min) min = array[i]
        if(array[i] > max) max = array[i]
    }
    console.log(min,max)
}

printMinMax(array)