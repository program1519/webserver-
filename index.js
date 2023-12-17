const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/html');



    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Internal Server Error');
        } else {

            res.statusCode = 200;
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
