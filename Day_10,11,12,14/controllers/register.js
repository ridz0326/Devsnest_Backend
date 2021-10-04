const User = require('../models/mongo');
const bcrypt = require('bcryptjs');

/**
 * check if email already exists
 * password hash
 * email lowercase 
 * save
 */
 
 const saltRounds = 10;
 const register = async(req, res) => {
 const { email, password } = req.body;


   try {
     const alreadyExists = await User.findOne({ where: {email} });
     if (alreadyExists) {
       res.status(401).send("Email already exists");
     } else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);
  
      const newUser = new User({ email: email.toLowerCase(), password: hash, confirmPassword: hash, fullName: 'ridz' });
      const savedUser = await newUser.save();
      res.status(201).send(savedUser); 
     }
   } catch (err) {
     console.log(err);
     res.status(501).send(err);
   }

};

 const registerSuperAdmin = async(req, res) => {
 const { email, password } = req.body;


   try {
     const alreadyExists = await User.findOne({ where: {email}.exec() });
     if (alreadyExists) {
       res.status(401).send("Email already exists");
     } else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);
  
      const newUser = new User({ email: email.toLowerCase(), password: hash, confirmPassword: hash, fullName: 'ridz', role: "Super-admin" });
      const savedUser = await newUser.save();
      res.status(201).send(savedUser); 
     }
   } catch (err) {
     console.log(err);
     res.status(501).send(err);
   }

};

 module.exports = {register, registerSuperAdmin};