'use strict';

const max = matrix => {
  let maxValue = matrix[0][0];
  for (const arr of matrix) {
    for (const xValue of arr) {
      if (xValue > maxValue) maxValue = xValue;
    }
  }
  return maxValue;
};

module.exports = { max };
