'use strict';
// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0:JavaScript', '1:Python', '2:Rust', '3:C++'],
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join(
//           '\n'
//         )}(Please select an answer typing an option number.)`
//       )
//     );

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayAnswers();
//     this.displayAnswers('string');
//   },

//   displayAnswers(type = 'string') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`This are poll results:${this.answers.join(',')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayAnswers.call({ answers: [1, 3, 5] });

//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === Array) {
//     } else if ((type = 'string')) {
//     }
//     console.log(`Poll results are ${this.answers.join(',')}`);
//   },
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
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
// let name = {
//   firstName: 'Baki',
//   lastName: 'Panajotovic',
//   printFullName: function (hometown) {
//     console.log(
//       this.firstName + ' ' + this.lastName + ' ' + 'from' + ' ' + hometown
//     );
//   },
// };
// name.printFullName('Pirot');

// let name2 = {
//   firstName: 'Pera',
//   lastName: 'Puljcin',
// };
// // function borrowing
// name.printFullName.call(name2, 'Gostusa');
// let name3 = {
//   firstName: 'Paja',
//   lastName: 'Momirovic',
// };
// name.printFullName.apply(name3, ['Nis']);
// // bind method
// let name4 = {
//   firstName: 'Isidorakis',
//   lastName: 'Mitic',
// };
// let printMyName = name.printFullName.bind(name4, 'Nis');
// console.log(printMyName());
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
});
document.querySelector('body').addEventListener('click', function () {
  header.style.color = 'blue';
});
