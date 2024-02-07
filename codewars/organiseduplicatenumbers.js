  function group(arr) {
  if (arr.length === 0) {
    return [];
  }

  const result = [];
  const numberMap = new Map();

  for (const number of arr) {
    if (numberMap.has(number)) {
      numberMap.get(number).push(number);
    } else {
      numberMap.set(number, [number]);
      result.push(numberMap.get(number));
    }
  }

  return result;
}

// Example usage:
const result = group([3, 2, 6, 2, 1, 3]);
console.log(result);
