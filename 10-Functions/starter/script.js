'use strict';
// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0:JavaScript', '1:Python', '2:Rust', '3:C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//   },

//   displayResults(type = 'array') {
//     if (type === Array) {
//       console.log(this.answers);
//     } else if ((type = 'string')) {
//     }
//     console.log(`Poll results are ${this.answers.join(',')}`);
//   },
// };
// const answer = Number(
//   prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`)
// );
// typeof answer === 'number' &&
//   answer < this.answers.length &&
//   this.answers[answer]++;

//////////////////////////////////////////////////////////////////////////

// const jonas = { name: 'Jonas Schmedtman', passport: 123123123 };
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 999999);
// };
// newPassport(jonas);
// console.log(jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// // Higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string:${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('Javascript is the best', upperFirstWord);
// transformer('Javascript is the best', oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
let name = {
  firstName: 'Baki',
  lastName: 'Panajotovic',
  printFullName: function (hometown) {
    console.log(
      this.firstName + ' ' + this.lastName + ' ' + 'from' + ' ' + hometown
    );
  },
};
name.printFullName('Pirot');

let name2 = {
  firstName: 'Pera',
  lastName: 'Puljcin',
};
// function borrowing
name.printFullName.call(name2, 'Gostusa');
let name3 = {
  firstName: 'Paja',
  lastName: 'Momirovic',
};
name.printFullName.apply(name3, ['Nis']);
// bind method
let name4 = {
  firstName: 'Isidorakis',
  lastName: 'Mitic',
};
let printMyName = name.printFullName.bind(name4, 'Nis');
console.log(printMyName());
