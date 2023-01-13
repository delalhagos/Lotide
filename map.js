
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


const map = function(array, callback) {
  const results = [];
for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//Test Cases
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word[word.length -1]);
console.log(results2);

const results3 = map(words, word => word[word.length]);
console.log(results3);


//this will test for the first letter of the element
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])); // => true
//this will test for the last letter of the element 
console.log(assertArraysEqual(results2, [ 'd', 'l', 'o', 'r', 'm' ])); // => true
//this will test for the length of the word 
console.log(assertArraysEqual(results3, ['6', '7', '2', '5', '3' ])); // => true
// i am not sure why this is not working 

















