'use strict';
const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Gleb', phone: '+380345432678' },
  { name: 'Slava', phone: '+380943768583' },
];
const findPhoneByName = (name) => {
  for (const record of phonebook) {
    if (obj.name === name) {
      return record.phone;
    }
  }
};
module.exports = { phonebook, findPhoneByName };