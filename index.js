function hasTargetSum(array, target) {
  // Write your algorithm here
  const numberSet = {}
  for (const number of array){
    const complement = target - number
    if(complement in numberSet) return true
    numberSet[number] = true
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target){
    const numberSet = {}
    for (const number of array){
      if it's the complement
    }
  }
*/

/*
  Add written explanation of your solution here
  create a function that takes a set of numbers and a target number 
  and determines if there are two numbers whose sum equals the target 
  number, and return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 5, 33, -11], 22));
}

module.exports = hasTargetSum;
