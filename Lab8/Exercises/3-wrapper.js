'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const type = types[i].name.toLowerCase();
    if (typeof args[i] !== type) {
      throw new TypeError(`Аргумент ${i} має бути типу ${type}`);
    }
  }
  const result = fn(...args);
  const resultType = types[types.length - 1].name.toLowerCase();
  if (typeof result !== resultType) {
    throw new TypeError(`Результат має бути типу ${resultType}`);
  }
  return result;
};

module.exports = { contract };
