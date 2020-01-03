// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

const countChar = (string, char) => {
  let no = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) no++;
  }
  return no;
};

const countBs = string => {
  return countChar(string, 'B');
};

console.log(countChar('kakkerlak', 'k'));
console.log(countBs('BBC'));
