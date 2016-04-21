const chai = require('chai');
const expect = chai.expect;
const Sieve = require('../src/sieve.js');

describe('Sieve', function() {
  it('sieve(n) should return an empty array when a negative number is passed in', function() {
    const sieve = new Sieve();
    expect(sieve.sieve(-2)).to.be.empty;
  });
});
