//console.log(dugme);




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

let massJohn = 92;
let massMark = 78;
let heightJohn = 1.95;
let heightMark = 1.69;

let MarkBMI = massMark / heightMark ** 2 / (heightMark * heightMark);
let JohnBMI = massJohn / heightJohn ** 2 / (heightJohn * heightJohn);
console.log(MarkBMI, JohnBMI);
massJohn = 85;
massMark = 95;
heightJohn = 1.76;
heightMark = 1.88;
markHigherBMI = (massMark > massJohn);

if (MarkBMI < JohnBMI) {
    console.log(`John's BMI (${JohnBMI}) is higher than Mark's BMI (${MarkBMI})!`)
}

else console.log(`Mark's BMI (${MarkBMI}) is higher than John's BMI (${JohnBMI})!`)

console.log(markHigherBMI);
