var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here

// --> 11)  Mount the body-parser middleware  here
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

/** 1) Meet the node console. */
console.log('Hello World');

/** 2) A first working Express Server
 * Checked from Documentation: http://expressjs.com/en/api.html
 *
app.get('/', function(req, res) {
  res.send('Hello Express');
});
*/

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

/** 3) Serve an HTML file */
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/** 4) Serve static assets  */
app.use(express.static(__dirname + '/public'));

/** 5) serve JSON on a specific route */
app.get('/json', function(req, res) {
  /** 6) Use the .env file to configure the app */
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    return res.json({ message: 'HELLO JSON' });
  }
  res.json({ message: 'Hello json' });
});

/** 8) Chaining middleware. A Time server */
app.get(
  '/now',
  function(req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function(req, res) {
    res.json({ time: req.time });
  }
);

/** 9)  Get input from client - Route parameters */
app.get('/:word/echo', function(req, res, next) {
  res.json({ echo: req.params.word });
  next();
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
app.get('/name', function(req, res, next) {
  res.json({ name: `${req.query.first} ${req.query.last}` });
  next();
});

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

/** 12) Get data form POST  */
app.post('/name', function(req, res, next) {
  res.json({ name: `${req.body.first} ${req.body.last}` });
  next();
});

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;
