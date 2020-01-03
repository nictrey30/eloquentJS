const repeat = (n, callback) => {
  for (let i = 0; i < n; i++) {
    callback(i);
  }
};

repeat(3, console.log);
let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);

// Higher-order functions allow us to abstract over actions, not just values.
// function that create other function
const greaterThan = n => m => m > n;
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
console.log(greaterThan10(9));

// functions that change other functions
const noisy = callback => (...args) => {
  console.log(`calling with ${args}`);
  let result = callback(...args);
  console.log('called with', args, ', returned', result);
  return result;
};

noisy(Math.min)(3, 7, 2);

// jonas - functions as arguments
let years = [1990, 1965, 1937, 2005, 1998];

const arrayCalc = (array, fn) => {
  let result = [];
  array.forEach(el => {
    result.push(fn(el));
  });
  return result;
};
const calcAge = year => new Date().getFullYear() - year;
let ages = arrayCalc(years, calcAge);
console.log(ages);

// We can even write functions that provide new types of control flow.
const unless = (test, then) => {
  if (!test) then();
};
repeat(10, n => {
  unless(n % 2 === 1, () => {
    console.log(n, ' is even');
  });
});
