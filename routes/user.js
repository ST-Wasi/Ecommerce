const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const User = require('../models/User');

router.get('/', async (req,res)=>{
    res.render('signup');
})

router.post('/signup', async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    let present = false;
    console.log("chalo")
    try {
      if (firstname && lastname && email && password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const isUserExist = await User.findOne({ email: email });
  
        if (isUserExist) {
          present = true;
        }
  
        if (present) {
          res.status(400).json({ error: 'User already exists' });
        } else {
          await User.create({ firstname, lastname, email, password: hashedPassword });
          res.status(201).json({ message: 'User registered successfully' });
        }
      } else {
        console.log('Please fill all the fields');
      }
    } catch (err) {
      console.log(`Error is: ${err}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    try {
      const user = await User.findOne({email});

      if(!user){
        res.status(400).json({message: "Ivalid Credentials. Please Try Again"});
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if(!isValidPassword){
        res.status(400).json({message: "Ivalid Credentials. Please Try Again"});
      }

      const token = jwt.sign({email: user.email}, 'abcdefghijklmnopqrstuvwxyz', {
        expiresIn: '1h'
      })
      res.status(201).json({token: token});
    } catch (error) {
      res.status(500).json({message: "Internal server Error"})
    }
  });

module.exports = router;