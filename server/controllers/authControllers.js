const User = require('../models/user');
const {hashPassword, comparePassword} = require('../helpers/auth');
const jwt = require('jsonwebtoken');

const getData = (req, res)=>{
    res.json("test is working")
}

const registerUser = async (req, res)=>{
   try{
     const {name, email, password, color} = req.body;
     // check if name was entered
     if(!name){
        return res.json({
            error: 'name is required'
        })
     }
     // check if password is good
     if(!password || password.length < 6 ){
        return res.json({
            error: 'password is required and should be atleast 6'
        })
     }
     // check email
     const exist = await User.findOne({email});
     if(exist){
        return res.json({
            error: 'Email is already exist'
        })
     }

     const hashedPassword = await hashPassword(password);

     //create user in database
     const user = await User.create({
        name,
        email,
        password: hashedPassword,
        color
     });

     return res.json(user);
   } catch(error){
     console.log(error);
   }
}


//login end point 
const loginUser = async (req, res)=>{
   try {
      const {email, password, color} = req.body;
      //check if user exist
      const user = await User.findOne({email});
      if(!user){
        return res.json({
            error: 'No User found'
        })
     }

     // check if password match
     const match = await comparePassword(password, user.password);
     console.log(match,"match1")
     if(match){
       jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token)=>{
        if(err) throw err;
        // res.cookie('token', token).json(user);
        res.cookie('token', token, {
            path: '/',
            sameSite: 'None',
            secure: true
          }).json(user);
       })
     }
     if(!match){
        return res.json({
            error: 'Passwords do not match'
        })
     }
   } catch(error){
      console.log(error);
   }
}

const getProfile = (req, res)=>{
   const {token} = req.cookies;
   if(token){
      jwt.verify(token, process.env.JWT_SECRET, {}, (err, user)=>{
         if (err) {
            res.status(401).json({ error: 'Unauthorized' });
          } else {
            res.json(user);
          }
      })
   } else {
      res.status(401).json({ error: 'Unauthorized' });
   }
}

module.exports = {
    getData,
    registerUser,
    loginUser,
    getProfile  
}