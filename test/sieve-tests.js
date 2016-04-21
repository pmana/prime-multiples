const chai = require('chai');
const expect = chai.expect;
const Sieve = require('../src/sieve.js');

describe('Sieve', () => {
  it('sieve(n) should return an empty array when a negative number is passed in', () => {
    const sieve = new Sieve();
    expect(sieve.sieve(-2)).to.be.empty;
  });

  it('sieve(1) should return the first prime number in an array (2)', () => {
    const sieve = new Sieve();
    expect(sieve.sieve(1)).to.eql([2]);
  });
});
