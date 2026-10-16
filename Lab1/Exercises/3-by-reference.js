'use strict';

const inc = (obj) => {
  obj.n += 1;
  console.log(obj);
};

module.exports = { inc };