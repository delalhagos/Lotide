const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);

  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " === " + expected);
  }
};

//TEST CODE
assertEqual("Lighthouse labs", "Bootcamp");
assertEqual(1,1);