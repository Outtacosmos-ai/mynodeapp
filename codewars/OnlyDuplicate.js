function onlyDuplicates(str) {
    const charCount = {};
    
    // Count occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    const result = [];
    
    // Iterate through the string and keep only duplicate characters
    for (const char of str) {
        if (charCount[char] > 1) {
            result.push(char);
        }
    }
    
    return result.join('');
}

console.log(onlyDuplicates("abccdefee")); // Output: "cceee"
console.log(onlyDuplicates("cceee")); // Output: "cceee"
