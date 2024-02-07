// return masked string
function maskify(cc) {
  // Check if the string has 4 or fewer characters
  if (cc.length <= 4) {
    return cc;
  } else {
    // Mask all characters except the last 4 with '#'
    return "#".repeat(cc.length - 4) + cc.slice(-4);
  }
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
