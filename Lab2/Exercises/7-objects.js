'use strict';

const fn = () => {
  const obj1 = { name: 'Gleb' };
  let obj2 = { name: 'Slava' };

  obj1.name = 'Михайло';
  obj2.name = 'Михайло';

  obj2 = { name: 'Gleb Slava' };
};

module.exports = { fn };