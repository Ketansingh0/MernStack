// Express.js 
// Express.js is a web application framework for Node.js. It is minimal and flexible. It provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications.
// Express.js is used for:
// Web Applications
// Mobile Applications
// APIs
// Features of Express.js
// Some of the important features of Express.js are:
// Allows to set up middlewares to respond to HTTP Requests.
// Defines a routing table which is used to perform different actions based on HTTP Method and URL.
// Allows to dynamically render HTML Pages based on passing arguments to templates.
// Middleware     


// Nodemon install command 
// npm install nodemon --save-dev
// npm install nodemon --save-dev -g (for global installation)

// Node install command
// npm init

// Express.js installation 
// npm install express


// Both line can be removed from the code
// const http = require('http');
// const server = http.createServer(app);

// Our app file will look like this using express.js
// External Module
// const express = require('express');

// Local Module
// const userRequestHandler = require('./user');

// const app = express();

// Adding Middleware 
// app.use((req, res, next) => {
//   console.log("First Middleware", req.url, req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second Middleware", req.url, req.method);
// });


// We can directly listen to the port using the below code
// cosnt PORT = 3002;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });





// Handling Routes in Express.js
// Syntax
// app.use([path,] callback[,callback....])