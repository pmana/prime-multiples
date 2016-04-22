'use strict';

class Sieve {
  sieve(number) {
    const primes = [], sieve = [];
    const max = number * (Math.log(number) + Math.log(Math.log(number)));
    for (let i = 2; primes.length < number; i++) {
      if (!sieve[i]) {
        primes.push(i);
        for (let k = i*2; k <= max; k += i) {
          sieve[k] = true;
        }
      }
    }
    return primes;
  }
}

module.exports = Sieve;
