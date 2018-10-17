const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

// Load User model
const User = require('../../models/User');

// @route  GET api/users/test
// @desc 	 Tests users route
// @access Private
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route  GET api/users/test
// @desc 	 Register User
// @access Public
router.post('/register', (req, res) => {
	 User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
     

      const newUser = new User({        
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
