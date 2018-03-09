const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../../models/User.js');

const router = express.Router();

// configure mongose promises
mongoose.Promise = global.Promise;

// GET to /checksession
router.get('/checksession', (req, res) => {
  if(req.user) {
    return res.send(JSON.stringify(req.user))
  }
  else {
    return res.send(JSON.stringify({}));
  }
})

// Post to /register
router.post('/register', (req, res) => {
  // create new user object to save, using value from coming json 
  const newUser = new User(req.body);

  // Save, via passport's "register" method, the user
  User.register(newUser, req.body.password, (err, user) => {
    // err
    if(err) {
      return res.send(JSON.stringify({ error: err }));
    }
    // test works ?
    else{
    return res.send(JSON.stringify(user))
  } 
  });
});

// Post to /login
router.post('/login', async (req, res) => {
  // look up the user by their email
  const query = User.findOne({ email: req.body.email });
  const foundUser = await query.exec();

  // if they exist they'll have the user name, so add that to our body
  if(foundUser) { req.body.username = foundUser.username}
  
  passport.authenticate('local')(req, res, () => {
    // If logged in, we should have user info to send back
    if(req.user) {
      return res.send(JSON.stringify(req.user));
    }

    // Otherwise return error
    else{
      return res.send(JSON.stringify({ error: 'There was an error loggin in' }));
    }
  })
})

// Post to /logout
router.get('/logout', (req, res) => {
  // console.log(req.user);
  req.logout();
  // console.log(req.user);
  return res.send(JSON.stringify(req.user));
  // console.log(req.user);
})

module.exports = router;
