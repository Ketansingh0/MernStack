const http = require('http');

const requestHandler = require('./calculator');

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});