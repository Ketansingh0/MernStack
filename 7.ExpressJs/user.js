
const fs = require('fs');

const userRequestHandler= (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Enter Your Details:</h1></body>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter Your Name"><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female" />');
    res.write('<br><button type="submit">Submit</button>');
    res.write('</form>');
    return res.end();

  }else if(req.url.toLowerCase() === '/submit-details' && req.method === 'POST'){
    const body = [];              // Buffering Chunks and Parsing Request
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);   
      const bodyObject = Object.fromEntries(params);  
      console.log(bodyObject);
      fs.writeFileSync('user.txt', JSON.stringify(bodyObject), 
      error => {
        console.log('Data written successfully');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
} else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');  
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
  }
};

module.exports = userRequestHandler;