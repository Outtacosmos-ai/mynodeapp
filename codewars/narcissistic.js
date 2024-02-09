function narcissistic(value) {
const digits = value.toString().split('');
    const numDigits = digits.length;
    let sum = 0;

    for (const digit of digits) {
        sum += Math.pow(parseInt(digit), numDigits);
    }

    return sum === value;
}

console.log(narcissistic(153));
console.log(narcissistic(1652));
