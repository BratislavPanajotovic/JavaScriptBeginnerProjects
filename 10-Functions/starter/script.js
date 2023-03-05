'use strict';
const jonas = { name: 'Jonas Schmedtman', passport: 123123123 };
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 999999);
};
newPassport(jonas);
console.log(jonas);
