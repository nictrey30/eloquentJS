let string = 'coconuts';
console.log(string.slice(4)); // nuts
console.log(string.slice(4, -1)); // nut
console.log(string.indexOf('o')); // 1
console.log('one two three'.indexOf('ee')); // → 11

// The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.

console.log('  okay \n '.trim()); // → okay

console.log(String(8).padStart(3, '0'));

let sentence = 'Secretarybirds specialize in stomping';
let words = sentence.split(' ');
console.log(words);
console.log(words.join(', '));

// repeat
console.log('la'.repeat(3)); // lalala
