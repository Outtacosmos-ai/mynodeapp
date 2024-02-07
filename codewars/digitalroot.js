function digitalRoot(n) {
  const digits = String(n).split('').map(Number);
  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  if (sum >= 10) {
    return digitalRoot(sum);
  }
  return sum;
}

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));
