// Remember, we're gonna use strict mode in all scripts now!
// 'use strict';
const t1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const t2 = [1, -2, -7, -1, 'error', 8, 13, 13, 15, 5, 9, 5];
let tu = t1.concat(t2);
const calcTempAmpl = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];

  for (i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > maxTemp) maxTemp = curTemp;
    if (curTemp < minTemp) minTemp = curTemp;
  }
  console.log(maxTemp);
  console.log(minTemp);
  return Math.abs(maxTemp) - Math.abs(minTemp);
};
const amplitude = calcTempAmpl(tu);
console.log(amplitude);

// let maxTemp = temperatures[0];
// let minTemp = temperatures[0];
// const calcTempAmpl = function () {
//   for (let i = 1; i < temperatures.length; i++) {
//     if (temperatures[i] > maxTemp) {
//       maxTemp = temperatures[i];
//     }
//     if (typeof temperatures[i] !== 'number') continue;
//   }

//   for (let i = 1; i < temperatures.length; i++) {
//     if (temperatures[i] < minTemp) {
//       minTemp = temperatures[i];
//     }
//     if (typeof temperatures[i] !== 'number') continue;
//   }
//   return maxTemp - minTemp;
// }
