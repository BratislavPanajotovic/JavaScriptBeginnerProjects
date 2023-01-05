// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
// const private = 534;

// function logger() {
// console.log('Hi my name is, whaat my name is');
// }
// calling / running / invoking function 
// logger();
// logger();
// logger();

// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

////////////// FUNCTION EXPRESSION ///////////////////////

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// //// ARROW FUNCTION //////////////////////

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);

// const yearsUnitlRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return ` ${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUnitlRetirement(1991, 'Jonas'));
// console.log(yearsUnitlRetirement(1980, 'Boca'));
const fruitCutter = function (fruit) {
    return fruit * 4;
}

const juiceContainer = function (apples, oranges, peaches) {
    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);
    const peachPieces = fruitCutter(peaches);
    const juice = `This Juice contains ${applePieces} apple pieces, ${orangePieces} orange pieces and ${peachPieces} peach pieces !`;
    return juice;
}
console.log(juiceContainer(5, 3, 4));