// function wrapValue(n) {
//   let local = n;
//   return () => local;
// }
// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1());
// console.log(wrap2());

function makeAdder(x) {
  function add(y) {
    return x + y;
  }
  return add;
}
let plusOne = makeAdder(1);
let plusTen = makeAdder(10);

console.log(plusOne(3)); // 4
console.log(plusTen(3)); // 13

function User() {
  let username, password;
  function doLogin(user, pass) {
    username = user;
    password = pass;
    // do the rest of the login work
    console.log(`username: ${username}; pass: ${password}`);
  }
  return {
    login: doLogin
  };
}

// create a User module instance
let fred = User();
fred.login('ana', 'ana1234');
// “The inner doLogin() function has a closure over username and password, meaning it will retain its access to them even after the User() function finishes running.”

function multiplier(factor) {
  return num => num * factor;
}
let twice = multiplier(2);
console.log(twice(5));
