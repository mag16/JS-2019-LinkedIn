/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Function declaration:
function doSomeMath(a, b, z) {
  let c = a + b - z;
  return c;
}

// Function expression:
const doMoreMath = function (a = 3, b = 2) {
  let c = a * b;
  return c;
};

console.log("Do some math:", doSomeMath(5, 6, 5));
console.log("Do more math:", doMoreMath(5, 6));

// Immediately Invoked Function Expression (IIFE)
// (function () {
//   let a = 4;
//   let b = 6;
//   let c = doSomeMath(a, b);
//   console.log(`The sum of a and b is: ${c}`);
// })();
