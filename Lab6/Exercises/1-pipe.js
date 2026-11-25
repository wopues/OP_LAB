'use strict';

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('All arguments must be functions');
    }
  }
  return (x) => fns.reduce((result, fn) => fn(result), x);
};

module.exports = { pipe };
