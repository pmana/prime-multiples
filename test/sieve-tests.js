const chai = require('chai');
const expect = chai.expect;
const Sieve = require('../src/sieve.js');

describe('Sieve', () => {
  const sieve = new Sieve();

  it('should fail when invalid input is passed in', () => {
    expect(function() { sieve.sieve('test'); }).to.throw(Error);
  });

  it('should return an empty array when zero is passed in', () => {
    expect(sieve.sieve(0)).to.be.empty;
  });

  it('should return an empty array when a negative number is passed in', () => {
    expect(sieve.sieve(-2)).to.be.empty;
  });

  it('should return the first prime number in an array (2)', () => {
    expect(sieve.sieve(1)).to.eql([2]);
  });

  it('should return the first 10 prime numbers in an array when 10 passed in', () => {
     expect(sieve.sieve(10)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  it('should return the one hundred thousandth prime number (and all preceding)', () => {
    const primes = sieve.sieve(100000), last = primes.slice(-1);
    expect(primes.length).to.equal(100000);
    expect(last).to.eql([1299709]);
  });
});
