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
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [125, 555, 44];
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// let total = [(bills[0] + calcTip(bills[0])), (bills[1] + calcTip(bills[1])), (bills[2] + calcTip(bills[2]))];
// console.log(bills);
// console.log(tips);
// console.log(total);
//////////challenge/////////
// const jonas = {
//     name: 'Jonas',
//     friends: ['Michael', 'Peter', 'Steven'],
// }
// console.log(`${jonas.name} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}!`);
// const jonas = {
//     name: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.name} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license!`
//     }

// };


// console.log(jonas.getSummary());

//////////////////CODING CHALLENGE///////////////////

// const Mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     height: 1.69,
//     weight: 78,
//     calcBMI: function () {
//         let BMI = this.weight / this.height ** 2;
//         return Math.round(BMI);
//     }
// }
// const John = {
//     firstName: 'John',
//     lastName: 'Smith',
//     height: 1.95,
//     weight: 92,
//     calcBMI: function () {
//         let BMI = this.weight / this.height ** 2;
//         return Math.round(BMI);
//     }
// }
// if (John.calcBMI > Mark.calcBMI) {
//     console.log(`${John.firstName} ${John.lastName}'s BMI(${John.calcBMI()}) is higher than ${Mark.firstName} ${Mark.lastName}'s BMI (${Mark.calcBMI()})`)
// } else {
//     console.log(`${Mark.firstName} ${Mark.lastName}'s BMI(${Mark.calcBMI()}) is higher than ${John.firstName} ${John.lastName}'s BMI (${John.calcBMI()})!`)
// }


// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     1991,
//     'teacher',
//     ['Peter', 'Michael', 'Steven'],
//     true
// ];
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);

//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// };
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);

// }
// console.log(ages);
// //////////continue and break
// console.log('ONLY STRINGS');

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);
// };
// console.log('BREAK WITH NUMBER');

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;

//     console.log(jonas[i], typeof jonas[i]);
// };

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     1991,
//     'teacher',
//     ['Peter', 'Michael', 'Steven'],
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// };

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(` -----Starting exercise ${exercise}`);
// INSERT EMOJI ( Windows + .) //////////////////////////////

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep}🏋️‍♂️`);
// };

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weight repetition ${rep}🏋️‍♂️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice = 6) {
//         console.log('Loop is about to end...');
//     }
// }
/////////FINAL CODING CHALLENGE OF FUNDAMENTALS////////////////

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 6]));
console.log(calcAverage([totals]));


// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [125, 555, 44];
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// let total = [(bills[0] + calcTip(bills[0])), (bills[1] + calcTip(bills[1])), (bills[2] + calcTip(bills[2]))];
// console.log(bills);
// console.log(tips);
// console.log(total);