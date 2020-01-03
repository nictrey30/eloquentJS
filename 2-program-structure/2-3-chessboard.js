// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character.
// The characters should form a chessboard.

let size = 10;

let output = '';
for (let i = 0; i < size; i++) {
  if (i % 2 === 0) {
    output += ' ';
  } else {
    output += '#';
  }
}

const reverseOutput = function(string) {
  let newOutputArr = string.split('');
  let newOutput = '';
  newOutputArr.forEach(char => {
    if (char === ' ') {
      newOutput += '#';
    } else {
      newOutput += ' ';
    }
  });
  return newOutput;
};
let reversedOutput = reverseOutput(output);

const buildOutput = function(bool, output) {
  if (bool) {
    return output;
  }
  return reversedOutput;
};

for (let i = 0; i < size; i++) {
  console.log(buildOutput(i % 2 === 0, output));
}
// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);
