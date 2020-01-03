// write two functions, reverseArray and reverseArrayInPlace.
// The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.

const reverseArray = array => {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
};
let myArray = [1, 7, 8, 3, 5, 4];
console.log(reverseArray(myArray));

const reverseArrayInPlace = array => {
  let counter = 1;
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let oldValue = array[i];
    array[i] = array[array.length - counter];
    array[array.length - counter] = oldValue;
    counter++;
  }
  return array;
};
console.log(reverseArrayInPlace(myArray));
myArray.push(9);
console.log(myArray);
console.log(reverseArrayInPlace(myArray));
