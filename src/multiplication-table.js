'use strict';

class MultiplicationTable {
  multiply(numbers) {
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
