/*
Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
*/
class Group {
  constructor(values) {
    this.values = values;
  }
  add(value) {
    if (this.values.includes(value)) {
      return 'value already in Group';
    } else {
      this.values.push(value);
    }
  }
  delete(value) {
    if (this.values.includes(value)) {
      this.values.splice(this.values.indexOf(value), 1);
    }
  }
  has(value) {
    if (this.values.includes(value)) {
      return true;
    }
    return false;
  }
  static from(values) {
    for (let i = 0; i < values.length - 1; i++) {
      for (let j = 1; j < values.length; j++) {
        if (values[i] === values[j]) {
          values.splice(j, 1);
        }
      }
    }
    return new Group(values);
  }
}

let group = Group.from([10, 20, 20, 30, 30, 20, 40, 10]);
console.log(group.add(50));
console.log(group.add(40));
console.log(group);
group.delete(30);
console.log(group);
