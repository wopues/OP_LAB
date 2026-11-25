'use strict';

const contract = (fn, ...types) => {
  const argTypes = types.slice(0, -1);
  const resultType = types[types.length - 1];
  const check = (value, type) => {
    if (typeof value !== type.name.toLowerCase()) {
      throw new TypeError(`Expected ${type.name}, got ${typeof value}`);
    }
  };
  return (...args) => {
    args.forEach((arg, i) => check(arg, argTypes[i]));
    const result = fn(...args);
    check(result, resultType);
    return result;
  };
};

module.exports = { contract };
