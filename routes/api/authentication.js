const express = require('express');
const passport = require('passport');
const User = require('../../models/User.js');

const router = express.Router();


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

module.exports = router;
