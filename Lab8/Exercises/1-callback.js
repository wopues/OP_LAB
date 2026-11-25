'use strict';

const iterate = (obj, callback) => {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    callback(key, obj[key], obj);
  }
};

module.exports = { iterate };
