const http = require('http');

// Create an HTTP server and assign it to the variable `app`
const app = http.createServer((req, res) => {
  // Set response header for plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send response body
  res.end('Hello Holberton School!');
});

// Server listens on port 1245
app.listen(1245);

// Export the server instance
module.exports = app;
