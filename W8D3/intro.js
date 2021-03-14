// Phase I

function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping1();

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping2();

function mysteryScoping3() {
  const x = 'out of block'; 
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping3();

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping4();

function mysteryScoping5() {
  let x = 'out of block'; 
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}

// mysteryScoping5();

function madLib(verb, adj, noun) {
  return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`;
}

console.log(madLib('make', 'best', 'guac')); //'Whe shall MAKE the BEST GUAC'

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

console.log(isSubstring("time to program", "time")); //true
console.log(isSubstring("Jump for joy", "joys")); //false

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
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2)); //true
console.log(isPrime(10)); //false
console.log(isPrime(15485863)); //true
console.log(isPrime(3548563)); //false

function sumOfNPrimes(n) {
  count = 0;
  sum = 0;

  let i = 2;
  while (count < n) {
    if (isPrime(i)) {
      count += 1;
      sum += i;
    }
    i++;
  }

  return sum;
}

console.log(sumOfNPrimes(0)); //0
console.log(sumOfNPrimes(1)); //2
console.log(sumOfNPrimes(4)); //17
