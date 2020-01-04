// Write a higher-order function loop that provides something like a for loop statement.
// It takes a value, a test function, an update function, and a body function.
// Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

// When defining the function, you can use a regular loop to do the actual looping.
const test = limit => value => value <= limit;
const update = i => i + 1;
const bodyFunc = value => console.log(value);

let test10 = test(10);

const ownFor = (counter, test10, update, bodyFunc) => {
  while (test10(counter)) {
    bodyFunc(counter);
    counter = update(counter);
  }
};
ownFor(0, test10, update, bodyFunc);
