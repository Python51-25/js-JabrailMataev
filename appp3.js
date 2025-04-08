function filterByLength(array,minLength){
  for(let i=0; i < array.length; i++){
    let currentString = array[i]
    if(currentString.length >= minLength){
console.log(currentString)
    }
    else{}
  }
}
filterByLength(['apple', 'banana', 'kiwi','strawberry'],6)