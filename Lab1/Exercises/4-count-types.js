'use strict';

const countTypesInArray = (array) => {
  const counts = {};
  for (const item of array) {
    const type = typeof item;
    counts[type] = (counts[type] || 0) + 1;
  }
  return counts;
};

module.exports = { countTypesInArray };