'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(min + Math.random() * (max - min + 1));
};

const generateKey = (length, characters) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    key += characters[random(0, characters.length - 1)];
  }
  return key;
};

module.exports = { generateKey };