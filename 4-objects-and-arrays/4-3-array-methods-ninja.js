const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
// console.log(names.sort());
const scores = [10, 50, 20, 5, 35, 70, 45];
// console.log(scores.sort());
scores.sort((a, b) => a - b);
console.log(scores);

const players = [
  { name: 'mario', score: 20 },
  { name: 'luigi', score: 10 },
  { name: 'chun-li', score: 50 },
  { name: 'yoshi', score: 30 },
  { name: 'shaun', score: 70 }
];
// sort players by score
players.sort((a, b) => a.score - b.score);
console.log(players);

// filter scores >= 40
console.log(scores.filter(el => el >= 40));

const users = [
  { name: 'shaun', premium: true },
  { name: 'yoshi', premium: false },
  { name: 'mario', premium: false },
  { name: 'chun-li', premium: true }
];
// only premium users
console.log(users.filter(user => user.premium));

// array map method
const prices = [10, 30, 15, 25, 50, 40, 5];
let salePrices = prices.map(price => price + price * 0.2);
console.log(salePrices);

const products = [
  { name: 'gold star', price: 20 },
  { name: 'mushroom', price: 40 },
  { name: 'green shells', price: 30 },
  { name: 'banana skin', price: 10 },
  { name: 'red shells', price: 50 }
];
// change the price to half price if it's over 30
// non-destructive method
let saleProducts = products.map(product => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});
console.log(saleProducts);

// chaining aray methods
// 1. filter product that isn't over 20 in price
// 2. half price for those products
let cheapProducts = products
  .filter(product => product.price <= 20)
  .map(product => {
    return { name: product.name, price: product.price / 2 };
  });
console.log(cheapProducts);

// array reduce method
const scoresReduce = [10, 20, 60, 40, 70, 90, 30];
// how many scores are over 50
// the value of counter is remembered through each call
let scoresOver50 = scoresReduce.reduce((acc, curr) => {
  if (curr > 50) {
    acc++;
  }
  return acc;
}, 0);
// the 0 is the initial value of the accumulator
console.log(`There are ${scoresOver50} scores over 50`);

const gameScores = [
  { player: 'mario', score: 50 },
  { player: 'yoshi', score: 30 },
  { player: 'mario', score: 70 },
  { player: 'crystal', score: 60 }
];
// calculate Mario's total score
let marioTotal = gameScores.reduce((acc, curr) => {
  if (curr.player === 'mario') {
    acc += curr.score;
  }
  return acc;
}, 0);
console.log(`Mario's total score is ${marioTotal}`);

// Subtract the numbers in the array, starting from the beginning:
let numbers = [175, 50, 25];
function myFunc(total, num) {
  return total - num;
}
let result = numbers.reduce(myFunc);
console.log('result', result);

// find
let firstHighScore = scoresReduce.find(el => el > 50);
