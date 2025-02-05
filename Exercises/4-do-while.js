'use strict';

const sum = (...args) => {
  let sum = 0;
  let i = 0;
  if (args.length === 0) return sum;
  do {
    sum += args[i];
    i++;
  } while (i < args.length);
  return sum;
};

module.exports = { sum };
