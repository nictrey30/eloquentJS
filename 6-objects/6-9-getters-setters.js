class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
  //
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}
let temp = new Temperature(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.celsius);

// ###################

const person = {
  firstName: 'Mata',
  lastName: 'Mare',
  // getters -> access properties
  // setters -> change(mutate) them
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const names = value.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }
};
console.log(person.fullName);
person.fullName = 'Ana Maria';
console.log(person.fullName);
