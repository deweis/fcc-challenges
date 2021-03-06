'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const app = express();

fccTesting(app); //For FCC testing purposes

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
  console.log('Async Hash: ', hash);

  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    /*res == true or false*/
    console.log('Async Comparison: ', res);
  });
});
//END_ASYNC

//START_SYNC
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log('Sync Hash: ', hash);

const result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log('Sync Comparison: ', result);
//END_SYNC

app.listen(process.env.PORT || 3000, () => {});
