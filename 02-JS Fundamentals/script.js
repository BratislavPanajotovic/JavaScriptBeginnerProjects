'use strict';

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

// console.log(yearsUnitlRetirement(1991, 'Jonas'));
// console.log(yearsUnitlRetirement(1980, 'Boca'));
// const fruitCutter = function (fruit) {
//     return fruit * 4;
// }

// const juiceContainer = function (apples, oranges, peaches) {
//     const applePieces = fruitCutter(apples);
//     const orangePieces = fruitCutter(oranges);
//     const peachPieces = fruitCutter(peaches);
//     const juice = `This Juice contains ${applePieces} apple pieces, ${orangePieces} orange pieces and ${peachPieces} peach pieces !`;
//     return juice;
// }
// console.log(juiceContainer(5, 3, 4));
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age; // return retirement;
//     return `kvo te boli kurc ${firstName} kad ce se penzionisem ${retirement}`;




// };
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Boca'));
// console.log(` ${firstName} retires in ${retirement} years`);

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

////////////CODING CHALLENGE FUNCTIONS/////////////////////
// const avgScore = (a, b, c) => (a, b, c) / 3;

// let scoreDolphins = avgScore(11444480, 1145490, 16545192);
// let scoreKoalas = avgScore(55, 22, 14);

// const checkWinner = (scoreDolphins, scoreKoalas) => {
//     if (scoreDolphins >= scoreKoalas * 2) {
//         console.log(`Winner of the trophy are Dolphins ${scoreDolphins} vs ${scoreKoalas}!`)
//     } else if (scoreKoalas >= scoreDolphins * 2) {
//         console.log(`Winner of the trophy are Koalas ${scoreKoalas} vs ${scoreDolphins} !`)
//     } else { console.log(`No one won the the trophy!`) }

// }; checkWinner(scoreDolphins, scoreKoalas);

//////////////////ARRAYS///////////////////
// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');
// friends.unshift('John');
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);

/////////// CODING CHALLENGE ARRAYS //////////////////
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let total = [(bills[0] + calcTip(bills[0])), (bills[1] + calcTip(bills[1])), (bills[2] + calcTip(bills[2]))];
console.log(bills);
console.log(tips);
console.log(total);
