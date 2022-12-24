
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

const get = (selection) => {
    const element = document.querySelector(selection);
    if(element)
    {
    return element;
}else{
console.log('Element not found!');
}

};
const dugme = get('.dugme'); 
const kocka = get('.Pravougaonik');  


dugme.addEventListener('click', () => {
    kocka.classList.add('move');
});

//map
//filter
//reduce

