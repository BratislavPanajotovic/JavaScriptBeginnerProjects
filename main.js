//console.log(dugme);

/// CODING CHALLENGE 1


// const newAccount = () => {
// name
// age
// initialBalance: 0;
// }


//  const deposit = (money) => {
//     initialBalance += money;
//     return initialBalance;
// }


// deposit(200);

//let massJohn = 92;
//let massMark = 78;
//let heightJohn = 1.95;
//let heightMark = 1.69;

//let MarkBMI = massMark / heightMark ** 2 / (heightMark * heightMark);
//let JohnBMI = massJohn / heightJohn ** 2 / (heightJohn * heightJohn);
//console.log(MarkBMI, JohnBMI);
//massJohn = 85;
//massMark = 95;
//heightJohn = 1.76;
//heightMark = 1.88;
//markHigherBMI = (massMark > massJohn);

///////CODING CHALLLENGE 2

//if (MarkBMI < JohnBMI) {
// console.log(`John's BMI (${JohnBMI}) is higher than Mark's BMI (${MarkBMI})!`)
//}

//else console.log(`Mark's BMI (${MarkBMI}) is higher than John's BMI (${JohnBMI})!`)

//console.log(markHigherBMI);


/////////////// CODING CHALLENGE 3 

let scoreDolphins1 = 96;
let scoreDolphins2 = 108;
let scoreDolphins3 = 89;

let averageScoreDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
console.log(averageScoreDolphins);

let scoreKoalas1 = 88;
let scoreKoalas2 = 91;
let scoreKoalas3 = 110;

let averageScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;
console.log(averageScoreKoalas);

let minimumScore = 100;
if ((averageScoreDolphins, averageScoreKoalas) < minimumScore) {
    console.log('Both teams are below the minimum score and its a draw!');
} else {

    if (averageScoreDolphins < averageScoreKoalas) {

        console.log('Koalas won !');
    }


    if (averageScoreDolphins > averageScoreKoalas) {

        console.log('Dolphins won !');
    }

    if (averageScoreDolphins === averageScoreKoalas) {
        console.log("Its a draw!");


    }
}
//////////////////////////


