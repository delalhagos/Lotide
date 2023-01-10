const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};
function tail (array){
  const result = [];
  const length = array.length;
  //loop through array and check how long the array would be 
  for (let index = 1; index < length; index++) {
 
    result.push[index];
  }
  return result;
}

const test1 =tail()

const test1 = tail([1, 2, 3]); 
assertEqual(test1, [1, 2, 3]);
console.log(test1)

const test2 = tail(["Hello", "Lighthouse", "Labs"]); 
assertEqual(test2, ["Lighthouse", "Labs"]);
console.log(test2);

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!




//const actual = tail([1, 2, 3]);
//const expected = [1, 2, 3];
//assertEqual(actual, expected);


//TEST CODE
assertEqual("Lighthouse labs", "Bootcamp");
assertEqual(1,1);
