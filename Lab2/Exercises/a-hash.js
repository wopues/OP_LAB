'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  Gleb: '+380345432678',
  Slava: '+380943768583',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };