'use strict';

const compose = (...fns) => {
  const errorHandlers = [];

  const f = (x) => {
    let result = x;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
    } catch (error) {
      for (const handler of errorHandlers) {
        handler(error);
      }
      return undefined;
    }
    return result;
  };

  f.on = (name, handler) => {
    if (name === 'error') {
      errorHandlers.push(handler);
    }
  };

  return f;
};

module.exports = { compose };
