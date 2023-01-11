
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

const without = function (array1,array2){
  const output =[]
  for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    
    if (array2.includes(element)=== false){
      output.push(element);
    }
  }
  return output
}
console.log(without([1, 2, 3], [1]))

//the output is an array that have elements pushed into after looping through the mentioned array to see if we need to include it or not 

//eqArrays([1, 2, 3], [1, 2, 3]); // => true
//eqArrays([1, 2, 3], [3, 2, 1]); // => false

//eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should Fail
