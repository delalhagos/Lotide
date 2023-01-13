const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  // checking the length of our objects
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // we are looping each key for object 1
    for (const key in object1) {
      // if the same key exists (truthy)
      if (object2[key]) {
        // checking if the values in the key are equal
        if (object2[key] !== object1[key]) {
          return false;
        } 
      } else {
        return false;
      }
    } 
  } else {
    return false;
  }
  return true;
};
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false