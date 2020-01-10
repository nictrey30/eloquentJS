/*
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.
If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.
It is okay if your iterator behaves strangely when the group is modified during iteration.
*/
class Group {
  constructor(values) {
    this.values = values;
  }
  [Symbol.iterator] = function*() {
    let i = 0;
    while (true) {
      yield this.values[i];
      i++;
      if (i === this.values.length) return;
    }
  };
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
      for (let j = i + 1; j < values.length; j++) {
        if (values[i] === values[j]) {
          values.splice(j, 1);
        }
      }
    }
    return new Group(values);
  }
}

let group = Group.from([10, 20, 20, 30, 30, 20, 40, 10]);
console.log(group);

let newGroup = Group.from(['a', 'b', 'c', 'd', 'e']);
for (let value of newGroup) {
  console.log(value);
}
