// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
let maxTemp = temperatures[0];
let minTemp = temperatures[0];
const calcTempAmpl = function () {
  for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] > maxTemp) {
      maxTemp = temperatures[i];
    }
    if (typeof temperatures[i] !== 'number') continue;
  }

  for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] < minTemp) {
      minTemp = temperatures[i];
    }
    if (typeof temperatures[i] !== 'number') continue;
  }
  return maxTemp - minTemp;
};
const amplitude = calcTempAmpl(temperatures);

console.log(maxTemp);
console.log(minTemp);
console.log(amplitude);
