const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};

// this is to count all the letters in the statement 
const countAlphabets = function (sentence) {
let count = 0
  for (const letter of sentence) {
  
  if (letter != " ")
  count++ 
  //decrement --

  
}
return count;

}

const countLetters = function (sentence){
  const counter = {}
  for (const letter of sentence){
if (letter === " " )
continue
    if (! counter[letter])
counter[letter] = 0
counter[letter]++
  }
  
  return counter;

}

console.log(countLetters("lighthouse in the house"));

//TEST CODE

//assertEqual(1,1);

// assertEqual won't work for array and it just work for strings and numbers