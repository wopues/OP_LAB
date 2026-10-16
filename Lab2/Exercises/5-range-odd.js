'use strict';

const rangeOdd = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 1) {
      result.push(i);
    }
  }
  return result;
};

module.exports = { rangeOdd };