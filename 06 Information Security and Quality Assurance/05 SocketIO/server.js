'use strict';

/* npm i express express-session body-parser mongodb passport cokkie-parser socket.io --save*/

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const auth = require('./app/auth.js');
const routes = require('./app/routes.js');
const mongo = require('mongodb').MongoClient;
const passport = require('passport');
const cookieParser = require('cookie-parser');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const sessionStore = new session.MemoryStore();

// https://www.freecodecamp.org/forum/t/done-advanced-node-and-express-set-up-the-environment/206574/9
const cors = require('cors');
app.use(cors());

// const passportSockerIo = require('passportSocketIo');
// https://www.freecodecamp.org/forum/t/advanced-node-and-express-challenges-missing-stuff/199826/8
// const passportSocketIo = require("passport.socketio");

fccTesting(app); //For FCC testing purposes

app.use('/public', express.static(process.cwd() + '/public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    key: 'express.sid',
    store: sessionStore
  })
);

mongo.connect(process.env.DATABASE, (err, db) => {
  if (err) console.log('Database error: ' + err);

  auth(app, db);
  routes(app, db);

  let currentUsers = 0;

  http.listen(process.env.PORT || 3000);

  //start socket.io code

  io.on('connection', socket => {
    console.log('A user has connected');
    ++currentUsers;
    console.log(currentUsers);
    io.emit('user count', currentUsers);

    socket.on('disconnect', () => {
      console.log('A user has disconnected');
      --currentUsers;
      console.log(currentUsers);
      io.emit('user count', currentUsers);
    });
  });

  //end socket.io code
});
