function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Cannot divide by zero";
      }
    case "%":
      if (num2 !== 0) {
        return num1 % num2;
      } else {
        return "Cannot calculate modulo with zero";
      }
    case "c":
      // Combination operation (multiply)
      return num1 * num2;
    default:
      return "Invalid operator";
  }
}

console.log(calculator(5, "+", 1));
console.log(calculator(3, "*", -4));
console.log(calculator(5, "c", 2));
