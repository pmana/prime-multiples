'use strict';

class MultiplicationTable {
  multiply(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('numbers must be an array');
    }

    if (!numbers.every(x => typeof x === 'number')) {
      throw new Error('all elements of numbers must be a number');
    }

    if (numbers.length === 0) {
      return [];
    }

    // header row
    const headerRow = [[''].concat(numbers)];

    // body
    const table = numbers.map(number => [number].concat(numbers.map(other => number * other)));
    return headerRow.concat(table);
  }
}

module.exports = MultiplicationTable;
