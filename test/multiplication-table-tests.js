const chai = require('chai');
const expect = chai.expect;
const MultiplcationTable = require('../src/multiplication-table.js');

describe('MultiplicationTable', () => {
  const table = new MultiplcationTable();

  it('should fail if a non-array is passed in', () => {
    expect(function() { table.multiply(0); }).to.throw(Error);
  });

  it('should return an empty array when empty array is passed in', () => {
    expect(table.multiply([])).to.be.empty;
  });

  it('should include a header row', () => {
    expect(table.multiply([1])[0]).to.eql(['', 1]);
  });

  it('should return the number squared when one number passed in, and include the number as a row header', () => {
    expect(table.multiply([2])[1]).to.eql([2, 4]);
  });

  it('should square all numbers in a table', () => {
    const numbers = [1, 2, 5, 10, 25];
    const expected = [
      ['', 1, 2, 5, 10, 25],
      [1, 1, 2, 5, 10, 25],
      [2, 2, 4, 10, 20, 50],
      [5, 5, 10, 25, 50, 125],
      [10, 10, 20, 50, 100, 250],
      [25, 25, 50, 125, 250, 625]
    ];
    expect(table.multiply(numbers)).to.eql(expected);
  });
});
