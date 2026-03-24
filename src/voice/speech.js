const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function listen() {
  return new Promise((resolve) => {
    rl.question('You: ', (answer) => {
      resolve(answer.toLowerCase());
    });
  });
}

module.exports = { listen };
