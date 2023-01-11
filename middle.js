const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};

function eqArrays(array1, array2) {
  if (array1.length !== array2.length) { 
    //the $ is used to output the outcome of the respective mentioned array  
    return false; 
  }

  for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    if (array2[index] !== element) { 
      return false;  
    }
  }
  
  return true;
}

const assertArraysEqual = function (array1,array2){
  const equal = eqArrays (array1, array2)
  assertEqual (equal,true)
}



const middle = function(array) {
  
  if (array.length <=2){
    return []
  }
if (array.length %2 === 1){
  //const middleIndex = Math.floor(array.length/2)
  //console.log(array[middleIndex])
  //           element   at the index
  //console.log(middleIndex)
  return [array[Math.floor(array.length/2)]]
  //  we type array here because we are trying to access the index 
  
}
if (array.length %2 === 0){
  //const middleIndex = (array.length/2, array.length/2-1)
  //console.log(array[middleIndex])
  //           element   at the index
  //console.log(middleIndex)

  return [array[array.length / 2 - 1], array[array.length / 2]]
  
}
}

//console.log(middle([1])) // => []
//console.log(middle([1, 2])) // => []

//console.log(middle([1, 2, 3])) // => [2]
//console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]