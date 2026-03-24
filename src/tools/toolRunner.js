function runTool(toolName) {
  switch (toolName) {
    case 'time':
      return `Current time: ${new Date().toLocaleTimeString()}`;
    default:
      return 'Unknown tool';
  }
}

module.exports = { runTool };
