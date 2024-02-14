function cakes(recipe, available) {
  // Initialize an array to store the number of cakes that can be made for each ingredient
  const cakesPossible = [];

  // Iterate over each ingredient in the recipe
  for (const ingredient in recipe) {
    // Check if the ingredient is available
    if (available.hasOwnProperty(ingredient)) {
      // Calculate the maximum number of cakes that can be made with the available amount of this ingredient
      cakesPossible.push(Math.floor(available[ingredient] / recipe[ingredient]));
    } else {
      // If the ingredient is not available, return 0 cakes
      return 0;
    }
  }

  // Return the minimum number of cakes that can be made based on the available ingredients
  return Math.min(...cakesPossible);
}

// Examples:
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
// Output: 2
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
// Output: 0
