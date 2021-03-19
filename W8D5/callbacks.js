// // Simple Timeout

// window.setTimeout(function() {
//   alert('HAMMERTIME');
// }, 5000);

// // Timout Plus Closure

// function hammerTime(time) {
//   window.setTimeout(function() {
//     alert(`${time} is hammertime!`)
//   });
// }

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits() {
  reader.question('Would you like some tea? ', function(res) {
    console.log(`You responded ${res}.`);
    reader.question('Would you like biscuits? ', function(res2) {
      console.log(`You responded ${res2}.`);

      const first = (res === 'yes') ? 'do' : 'don\'t';
      const sec = (res2 === 'yes') ? 'do' : 'don\'t';

      console.log(`So you ${first} want tea and you ${sec} want biscuits.`);
      reader.close();
    });
  });
}

teaAndBiscuits();
