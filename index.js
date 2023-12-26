const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
 const app = express();
 app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html');
    });
const server = http.createServer((req, res) => {

   server.listen(80, () => {
      console.log('server run...');
    });
