const creditCard = '2034399002125581';
const last4Digits = creditCard.slice(-4);
let masked = last4Digits.padStart(creditCard.length, '*');

console.log(last4Digits)
console.log(masked);
