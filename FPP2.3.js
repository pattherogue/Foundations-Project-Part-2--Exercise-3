// Generate a decimal number between 0 (inclusive) and 1 (exclusive) using JavaScript's `Math` functions.

// Generate a Random Decimal
const randomDecimal = Math.random();
// Determine the Range
const range = 33 - 3 + 1; // 31
// Adjust the Range for Random Decimal
const randomInRange = randomDecimal * range; // Adjusts the range to get a number between 0 (inclusive) and the value of 'range' (exclusive).
// Convert to Integer with Floor
const randomInt = Math.floor(randomInRange); // Convert the decimal number to an integer to get values between 0 and (range - 1).
// Shift the Range
const shiftValue = randomInt + 3; // Shift the range to get an integer between 3 and 33

// Determine the desired range of numbers for our secret shift value, which is between 3 and 33.
const range = 33 - 3 + 1; // 31


// Why did we add 1 to the difference between 33 and 3?
// ANSWER: The reason we add 1 to the difference between 33 and 3 is to ensure that the upper bound of the range is inclusive.

// Using the random decimal number generated in Step 1, adjust its value to fit within the desired range determined in Step 2.
// ANSWER:const randomInRange = randomDecimal * range;

// How does multiplying randomDecimal by range help us get a number within our desired range?
// ANSWER: Multiplying randomDecimal by the range and adding the minimum value helps us scale and shift the random decimal to fit within the desired range.

// Round down the decimal number obtained in Step 3 to get a whole integer.
const randomInt = Math.floor(randomInRange);

// Why do we use the Math.floor() function instead of other rounding methods like Math.round()?
// ANSWER: In this context, we use Math.floor() instead of Math.round() to ensure that the rounded value is always rounded down. 

// Adjust the integer obtained in Step 4 to fit within the range of 3 to 33, inclusive.
const shiftValue = randomInt + 3;

// How does adding 3 to randomInt ensure that our final shiftValue is between 3 and 33?
// ANSWER: Adding 3 to `randomInt` shifts the range, making the numbers fall between 3 and 33, inclusive.

