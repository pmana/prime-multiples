const chai = require('chai');
const expect = chai.expect;
const MultiplcationTable = require('../src/multiplication-table.js');

describe('MultiplicationTable', () => {
  const table = new MultiplcationTable();
  it('should return an empty array when empty array is passed in', () => {
    expect(table.multiply([])).to.be.empty;
  });
});
