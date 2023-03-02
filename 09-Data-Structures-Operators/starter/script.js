'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};
console.log(openingHours);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', adress }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngridients) {
    console.log(mainIngredient, otherIngridients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 2}: ${el}`);
}

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
const passenger = 'jOnAS';

const correctName = function (name) {
  let passengerL = passenger.toLowerCase();
  name = passenger[0].toUpperCase() + passengerL.slice(1);
  return name;
};
correctName(passenger);
console.log(passenger);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@jonas.Io \n';

// const lowerCaseEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerCaseEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing

const priceGB = '288.97$';
const priceUS = priceGB.replace('$', 'e').replace('.', ',');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('boeing'));
console.log(plane.startsWith('Air'));
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}
//Practice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('Youre not allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a laptop, some foof and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
// const [firstName, lastName] = 'Bratislav Panajotovic'.split(' ');
// const newName = ['Mr.', firstName, lastName.join(' ')];
// console.log(newName);

// Probaj sam da resis ovo!!

// const capitalizeName = function (capitalizedName) {
//   const [firstName, lastName] = capitalizedName;
//   console.log(capitalizedName[0].toUpperCase() + capitalizedName.slice(1));
// };
// const names = capitalizeName.split(' ');
// for (const n of names) {
//   namesUpper.push(n[0].toUpperCase() + n.slice(1));
// }
// console.log(namesUpper.join(' '));
// capitalizeName('jessica ann smith davis');
// capitalizeName('bata panajotovic');
// capitalizeName('nikola radovanovic');

//Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+'));

// const plane = 'A320';
// console.log(plane.length);

// console.log(plane.indexOf('2'));
// console.log(airline.slice(0, airline.lastIndexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat ');
//   else console.log('You got lucky');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const arr = [7, 8, 9, 10, 11, 12];
// const newArr = [1, 2, ...arr];
// const [a, b, ...others] = [arr];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'spinach');

////objects//

// const newMenu = ['Gnochi', ...restaurant.mainMenu];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// // join 2 arrays or more
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const ingredient = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// restaurant.orderPasta(...ingredient);

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guissepe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
// restaurant.orderDelivery({
//   time: '22:30',
//   adress: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   adress: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const arr = [2, 3, 4];
// console.log(arr);
// let [prvi, , drugi] = restaurant.categories;

// // let temp = prvi;
// // prvi = drugi;
// // drugi = temp;
// // console.log(prvi, drugi);

// [prvi, drugi] = [drugi, prvi];
// console.log(prvi, drugi);

// console.log(restaurant.order(2, 0));
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// // Nested destructuring - Destructuring inside destructuring

// const nested = [2, 4, [5, 6]];

// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

// //////////////Destructuring objects//////////////////

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// //// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //////// Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c)
