const http = require('http');
const testingSyntax = require('./syntax');
const runtimeError = require('./runtime');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  //testingSyntax();
  runtimeError();
});  

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});