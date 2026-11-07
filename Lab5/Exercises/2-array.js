'use strict';

const array = () => {
  const items = [];

  const arr = (i) => items[i];

  arr.push = (value) => items.push(value);

  arr.pop = () => items.pop();

  return arr;
};

module.exports = { array };
