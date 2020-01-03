let anObject = {
  left: 1,
  right: 2
};
console.log(anObject.left);
delete anObject.left;
// The binary in operator, when applied to a string and an object, tells you whether that object has a property with that name.
console.log('right' in anObject);

// To find out what properties an object has, you can use the Object.keys function. You give it an object, and it returns an array of strings—the object’s property names.

let obj2 = {
  x: 0,
  y: 0,
  z: 2
};
console.log(Object.keys(obj2));

// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA); // { a: 1, b: 3, c: 4 }

// Object.entries() returns an array whose elements are arrays corresponding to the enumerable string-keyed property [key, value] pairs found directly upon object.
const obj3 = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj3)); // [ [ 'foo', 'bar' ], [ 'baz', 42 ] ]

// iterate through key-value gracefully
const obj4 = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj4)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj4).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
