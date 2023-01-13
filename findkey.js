const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};

function findKey(object, callbackFunction) {
  //looping through the object
  for(let key in object){
    // to fine key you write key
    // to find value you write object[key]
    //to find the number of stars object[key].stars

    // if callback is true
    // if object[key] === 2 then return the key ("noma")
    if(callbackFunction(object[key])){
      //we use return because as soon as it finds first 2
      // it will exit the function 
      //and we use console.log to go through the whole array 
      return key;
    }
  }
}


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); 