// some method
// check if any value in the ages are 18 and over
let ages = [3, 10, 18, 20];
const checkAge = age => age >= 18;
console.log(ages.some(checkAge));

// findIndex method
// Get the index of the first element in the array that has a value of 18 or more
console.log(ages.findIndex(checkAge));
// if it doesn't find an index it returns -1
