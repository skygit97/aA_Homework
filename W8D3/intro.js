// Phase I

function madLib(verb, adj, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`);
}

madLib('make', 'best', 'guac'); // 'Whe shall MAKE the BEST GUAC'

function isSubstring(searchString, subString) {
  console.log(searchString.includes(subString));
}

isSubstring("time to program", "time"); //true
isSubstring("Jump for joy", "joys"); // false

// Phase II

function fizzBuzz(arr) {
  let newArr = [];

  arr.forEach(el => {
    if ((el % 3 === 0 || el % 5 === 0) !== (el % 3 === 0 && el % 5 === 0)) {
      newArr.push(el);
    }
  });

  return newArr;
}

console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 15])); //[3. 5. 6]

function isPrime(num) {
  if (num < 2) { return false; }

  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2)); //true
console.log(isPrime(10)); //false
console.log(isPrime(15485863)); //true
console.log(isPrime(3548563)); //false

function firstNPrimes(n) {
  let primes = [];

  let i = 2;
  while (primes.length < n) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i++;
  }

  return primes;
}

console.log(firstNPrimes(3)); // [2, 3, 5, 7]

function sumOfNPrimes(n) {
  let sum = 0;
  let primes = firstNPrimes(n);
  primes.forEach(el => { sum += el; });
  
  return sum;
}

console.log(sumOfNPrimes(0)); //0
console.log(sumOfNPrimes(1)); //2
console.log(sumOfNPrimes(4)); //17
