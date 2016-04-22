'use strict';

class MultiplicationTable {
  multiply(numbers) {
    if (numbers.length === 0) {
      return [];
    }

    let table = [];

    // header row
    table.push([''].concat(numbers));

    // body
    table = table.concat(numbers.map(number => [number].concat(numbers.map(other => number * other))));
    return table;
  }
}

module.exports = MultiplicationTable;
