const fs = require('fs');
const path = require('path');
const http = require('http');
const http2 = require('http2');
const express = require('express');
const compression = require('compression');

const app = express();
app.use(compression());

const options = {
  key: fs.readFileSync('/Users/thomasearly/Desktop/config/certs/devwowcher/devwowcher.key'),
  cert: fs.readFileSync('/Users/thomasearly/Desktop/config/certs/devwowcher/devwowcher.crt')
}
const spdy = require('spdy');

const server = spdy
  .createServer(options, app)
  .listen(3000, err => {
    if (err) throw new Error(err);
    console.log('Listening...');
  });
