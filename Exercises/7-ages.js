'use strict';

const ages = persons => {
  const personAge = {};
  for (const person in persons) {
    const age = persons[person].died - persons[person].born;
    personAge[person] = age;
  }
  return personAge;
};

module.exports = { ages };
