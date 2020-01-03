// We want to write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words Cows and Chickens after them and zeros padded before both numbers so that they are always three digits long.

// 007 Cows
// 011 Chickens
// function printFarmInventory(chickens, cows) {
//   let cowString = String(cows);
//   while (cowString.length < 3) {
//     cowString = '0' + cowString;
//   }
//   console.log(`${cowString} Cows`);
//   let chickenString = String(chickens);
//   while (chickenString.length < 3) {
//     chickenString = '0' + chickenString;
//   }
//   console.log(`${chickenString} Chickens`);
// }
// printFarmInventory(3, 7);

// function printWithPadding(number, label) {
//   let numberString = String(number);
//   while (numberString.length < 3) {
//     numberString = '0' + numberString;
//   }
//   console.log(`${numberString} ${label}`);
// }
// function printFarmInventory(noCows, noChickens, noPigs) {
//   printWithPadding(noCows, 'Cows');
//   printWithPadding(noChickens, 'Chickens');
//   printWithPadding(noPigs, 'Pigs');
// }
// printFarmInventory(7, 11, 13);

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
}
function printFarmInventory(noCows, noChickens, noPigs) {
  console.log(`${zeroPad(noCows, 3)} Cows`);
  console.log(`${zeroPad(noChickens, 3)} Chickens`);
  console.log(`${zeroPad(noPigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);
