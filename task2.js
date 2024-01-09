function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

function combinator(n, p) {
  if (n < p) {
    return "Invalid input: n should be greater than or equal to p";
  }

  const numerator = factorial(n);
  const denominator = factorial(p) * factorial(n - p);

  return numerator / denominator;
}

// Example usage:
let n = 5;
let p = 2;
let result = combinator(n, p);
console.log(result); // Output: 10
