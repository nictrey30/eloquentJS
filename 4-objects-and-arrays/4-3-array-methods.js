let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

remember('groceries');
remember('charge phone');
getTask();
rememberUrgently('learn js');
console.log(todoList);

// indexOf, lastIndexOf
let nums = [1, 2, 3, 4, 2, 1, 2, 3, 5, 4];
console.log(nums.indexOf(2));
console.log(nums.lastIndexOf(2)); // search from the end

// slice - takes start and end indices and returns an array that has only the elements between them. The start index is inclusive, the end index exclusive
console.log(nums.slice(2, 4)); // [ 3, 4 ]
console.log(nums.slice(-3)); // [ 3, 5, 4 ]
console.log(nums.slice(-3, -1)); // [ 3, 5 ]

// The concat method can be used to glue arrays together to create a new array, similar to what the + operator does for strings.
let letters = ['a', 'b', 'c', 'd', 'e'];
function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(letters, 2)); // [ 'a', 'b', 'd', 'e' ]

// splice method
// array.splice(index, howmany, item1, ....., itemX)
// index	Required. An integer that specifies at what position to add/remove items
// howmany	Optional. The number of items to be removed. If set to 0, no items will be removed
// item1, ..., itemX	Optional. The new item(s) to be added to the array
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2, 1, 'Lemon', 'Kiwi');
console.log(fruits); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]

let fruits1 = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'];
fruits1.splice(2, 2);
console.log(fruits1); // [ 'Banana', 'Orange', 'Mango' ]
