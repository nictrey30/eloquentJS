function sumAll(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}
let numbers = [5, 1, 7];
console.log(sumAll(4, 5, 7));
console.log(sumAll(4, ...numbers, 7));
