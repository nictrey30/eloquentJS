// write a function that takes 2 arguments, start and end,
// and returns an array containing all the numbers from start up to end

function range(start, end, step = 1) {
  let numbers = [];
  if (step >= 1) {
    for (let i = start; i <= end; i = i + step) {
      numbers.push(i);
    }
  } else {
    for (let i = start; i >= end; i = i + step) {
      numbers.push(i);
    }
  }
  return numbers;
}

console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

const sum = array => {
  let sum = 0;
  for (num of array) {
    sum += num;
  }
  return sum;
};

console.log(sum(range(1, 10)));
