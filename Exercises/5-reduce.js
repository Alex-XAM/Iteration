'use strict';

const sum = (...args) => args.reduce((sum, item) => sum += item, 0);
// Use Array.prototype.reduce method
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

module.exports = { sum };
