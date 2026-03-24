const { runTool } = require('../tools/toolRunner');

async function runAgent(input) {
  // simple intent detection
  if (input.includes('time')) {
    return runTool('time');
  }

  if (input.includes('hello')) {
    return 'Hello! I am Dripty 🚀';
  }

  return `You said: ${input}`;
}

module.exports = { runAgent };
