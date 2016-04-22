'use strict';

class MultiplicationTable {
  multiply(numbers) {
    if (numbers.length === 0) {
      return [];
    }

    const table = [];

    // header row
    table.push([''].concat(numbers));

    // body
    table.concat(numbers.map(number => numbers.map(other => number * other)));
    return table;
  }
}

module.exports = MultiplicationTable;
