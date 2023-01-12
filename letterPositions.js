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

const assertArraysEqual = function (array1, array2) {
  const equal = eqArrays(array1, array2);
  assertEqual(equal, true);
};

//eqArrays([1, 2, 3], [1, 2, 3]); // => true
//eqArrays([1, 2, 3], [3, 2, 1]); // => false

//eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should Fail

const letterPositions = function (sentence) {
  const results = {};

  for (let index = 0; index < sentence.length; index++) {
    //           conditions that allows you to loop
    const letter = sentence[index];
    //declaring variable letters to the index part of the sentence which is an array.
    //sentence[0] the first index
    console.log("this is the current letter", letter);
    if (letter in results) {
      //letters are our keys in the object results
      console.log("This letter already exists in our object");
      console.log("this is the value", results[letter]);
      //results[letter] index
      results[letter].push(index);
    } else {
      console.log("This letter doesnot exist in the object");
      results[letter] = [index];
      //the index will be in the value as an array
    }
  }

  console.log("this is the end results", results);

  return results;
};
letterPositions("hello");
assertArraysEqual(letterPositions("hello").e, [1]);
//assertArraysEqual
