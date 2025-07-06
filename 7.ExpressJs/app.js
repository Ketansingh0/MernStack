// External Module
const express = require('express');

// Local Module
const userRequestHandler = require('./user');

const app = express();

app.use("/",(req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  next();
});

app.use("/submit-details",(req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p> Welcome to Complete Coding Node.js series</p>");
});



const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});