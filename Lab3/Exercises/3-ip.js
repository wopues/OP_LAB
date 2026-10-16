'use strict';

const ipToInt = (ip = '127.0.0.1') =>
  ip.split('.').map(Number).reduce((acc, x) => (acc << 8) + x, 0);

module.exports = { ipToInt };