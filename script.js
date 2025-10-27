// Get hostname from browser
const hostname = window.location.hostname;

// Get current timestamp
const now = new Date();
const timestamp = now.toISOString().replace('T', ' ').split('.')[0];

// Set the output text
const output = document.getElementById('output');
output.textContent = `From Host: ${hostname} | at ${timestamp}`;
