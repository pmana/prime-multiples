'use strict';

class MultiplicationTable {
  multiply(numbers) {
    if (numbers.length === 0) {
      return [];
    }

    const table = [];

    // header row
    table.push([''].concat(numbers));
    return table;
  }
}

module.exports = MultiplicationTable;
