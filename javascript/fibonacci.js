function fibonacci(num) {
  // type your code here
  // writing out 0, 1, 1, 2, 3, 5, 8, etc
  if (num < 2) {
    return num
  }
  let lastTwo = [0, 1]
  // num = 4, i = 3
  for (let i=0; i < num-1; i++) {
    const sum= lastTwo[0] + lastTwo[1]
    lastTwo = [lastTwo[1], sum]
  }
  return lastTwo[1]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
