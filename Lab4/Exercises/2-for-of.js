'use strict';

const sum = (...args) => {
  let total = 0;
  for (const i of args) {
    total += i;
  }
  return total;
};

module.exports = { sum };
