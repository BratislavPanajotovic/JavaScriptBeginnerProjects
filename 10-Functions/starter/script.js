'use strict';
const jonas = { name: 'Jonas Schmedtman', passport: 123123123 };
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 999999);
};
newPassport(jonas);
console.log(jonas);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string:${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
let greet = greeting => name => console.log(`${greeting} ${name}`);

greet('Hello')('Buddy');
