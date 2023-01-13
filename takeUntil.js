const takeUntil = function(array, callback) {
  const result = []
  for (let item of array){
    // if callback function is true
    // which means condition is met
    if(callback(item)===false){
      result.push(item) // add item to array   
    } else {
      return result  //if its not true, then exit function and return result array
    }
  }
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);