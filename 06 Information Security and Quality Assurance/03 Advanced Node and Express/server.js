'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const session = require('express-session');
const passport = require('passport');
const mongo = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const LocalStrategy = require('passport-local');

const app = express();

fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongo.connect(process.env.DATABASE, (err, db) => {
  if (err) {
    console.log('Database error: ' + err);
  } else {
    console.log('Successful database connection');

    passport.serializeUser((user, done) => {
      done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
      db.collection('users').findOne({ _id: new ObjectID(id) }, (err, doc) => {
        done(null, doc);
      });
    });

    passport.use(
      new LocalStrategy(function(username, password, done) {
        db.collection('users').findOne({ username: username }, function(
          err,
          user
        ) {
          console.log('User ' + username + ' attempted to log in.');
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false);
          }
          if (password !== user.password) {
            return done(null, false);
          }
          return done(null, user);
        });
      })
    );

    /* Middleware to check if the user is authenticated*/
    const ensureAuthenticated = (req, res, next) => {
      if (req.isAuthenticated()) {
        return next();
      }
      res.redirect('/');
    };

    // Registration of New Users"
    // https://github.com/freeCodeCamp/freeCodeCamp/issues/17820
    /*if (process.env.ENABLE_DELAYS) app.use((req, res, next) => {
      switch (req.method) {
        case 'GET':
          switch (req.url) {
            case '/logout': return setTimeout(() => next(), 500);
            case '/profile': return setTimeout(() => next(), 700);
            default: next();
          }
        break;
        case 'POST':
          switch (req.url) {
            case '/login': return setTimeout(() => next(), 900);
            default: next();
          }
        break;
        default: next();
      }
    });*/

    // Enable to pass the challenge called "Advanced Node and Express -
    app.route('/').get((req, res) => {
      res.render(process.cwd() + '/views/pug/index', {
        title: 'Home Page',
        message: 'Please login',
        showLogin: true,
        showRegistration: true
      });
    });

    app
      .route('/login')
      .post(
        passport.authenticate('local', { failureRedirect: '/' }),
        (req, res) => {
          console.log(`User ${req.user.username} attempted to log in..`);
          res.redirect('/profile');
        }
      );

    app.route('/profile').get(ensureAuthenticated, (req, res) => {
      res.render(process.cwd() + '/views/pug/profile', {
        username: req.user.username
      });
    });

    app.route('/register').post(
      (req, res, next) => {
        db.collection('users').findOne(
          { username: req.body.username },
          function(err, user) {
            if (err) {
              next(err);
            } else if (user) {
              res.redirect('/');
            } else {
              db.collection('users').insertOne(
                { username: req.body.username, password: req.body.password },
                (err, doc) => {
                  if (err) {
                    res.redirect('/');
                  } else {
                    next(null, user);
                  }
                }
              );
            }
          }
        );
      },
      passport.authenticate('local', { failureRedirect: '/' }),
      (req, res, next) => {
        res.redirect('/profile');
      }
    );

    app.route('/logout').get((req, res) => {
      req.logout();
      res.redirect('/');
    });

    app.use((req, res, next) => {
      res
        .status(404)
        .type('text')
        .send('Not Found');
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log('Listening on port ' + process.env.PORT);
    });
  }
});
