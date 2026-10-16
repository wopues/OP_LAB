'use strict';

const average = (a, b) => (a + b) / 2;
const square = (x) => x * x;
const cube = (x) => x * x * x;
const calculate = () => {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    const currentAverage = average(square(i), cube(i));
    result.push(currentAverage);
  }
  return result;
};

module.exports = { square, cube, average, calculate };