const next = require('next');
const express = require('express');
const cookieParser = require('cookie-parser');

const dev = process.env.NODE_ENV !== ' production';
const port = process.env.PORt || 8080;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(()=>{
  const server = express();

  server.use(cookieParser());
  server.get('*', (req, res)=>{

    return handle(req, res);
  });
  server.listen(port, err => {
    if(err) throw err;
    console.log(`Listening on port ${port}`);
  });
});