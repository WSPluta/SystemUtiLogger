const os = require('os');
const osUtils = require('os-utils');
const fs = require('fs');

const logFilePath = 'system_stats.log';

function logSystemStats() {
  osUtils.cpuUsage(function (cpuUsage) {
    const cpuPercent = cpuUsage * 100; 
    const memoryUsage = osUtils.freememPercentage() * 100; 

    const networkInterfaces = os.networkInterfaces();
    const networkUsage = networkInterfaces['eth0'] ? networkInterfaces['eth0'][0].bytes : 0; 
    const logMessage = `CPU Usage: ${cpuPercent.toFixed(2)}%, Memory Usage: ${memoryUsage.toFixed(2)}%, Network Received: ${networkUsage} bytes\n`;

    fs.appendFile(logFilePath, logMessage, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      } else {
        console.log('System statistics logged successfully.');
      }
    });
  });
}

logSystemStats();

setInterval(() => {
  console.log('Logging system statistics...');
  logSystemStats();
}, 15 * 1000);
