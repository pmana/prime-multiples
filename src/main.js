'use strict';

const prompt = require('prompt');
const Table = require('cli-table');
const Sieve = require('./sieve');
const MultiplicationTable = require('./multiplication-table');

const schema = {
  properties: {
    number: {
      description: 'Enter the number of prime numbers to generate',
      type: 'integer',
      message: 'Number must be an integer',
      required: true
    }
  }
};

prompt.start();
prompt.get(schema, function(err, result) {
  const sieve = new Sieve(), multiplicationTable = new MultiplicationTable();
  const primes = sieve.sieve(result.number);
  const multiples = multiplicationTable.multiply(primes);
  const output = new Table();
  output.unshift(...multiples);
  console.log(output.toString());
});
