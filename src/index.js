require('dotenv').config();

const { runAgent } = require('./core/agent');
const { listen } = require('./voice/speech');
const logger = require('./utils/logger');

async function main() {
  logger.info('🎤 Dripty is listening...');

  while (true) {
    const input = await listen();
    const response = await runAgent(input);
    logger.success(`🤖 ${response}`);
  }
}

main();
