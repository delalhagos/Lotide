const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
  }
};

//TEST CODE
assertEqual("Lighthouse labs", "Bootcamp");
assertEqual(1, 1);

const countOnly = function (allItems, itemsToCount) {
  let obj = {}
  Object.enteries(itemsToCount).forEach(([key,value]) => {
  if (allItems.includes(key) && value == true)  {
if (!obj[key]){
  obj[key]=1
}
else {
  obj[key] += 1
}
  }
  });
  return obj

};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
