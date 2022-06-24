import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";




export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
   
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    const userExit = await User.findOne({ email: req.body.email })
    if (userExit) {
      return next(createError(400, "Email already exist!"));
        // res.status(422).json({ error: "Email already exit" })
        //res.send("email already exit")
        
    }else if(req.body.password.length<5){
      return next(createError(400, "Password must be at least 5 characters!"));
     // res.send("Pass must contain 5 characters")
    }else if(isNaN(req.body.phone)){
      return next(createError(400, "Phone must contain numbers!"));
    }
    else if(!req.body.email.includes("@")){
      return next(createError(400, "Email must be valid"));
      //res.send("must contain a valid email address")
    }else if(req.body.password!==req.body.confirmPassword){
      return next(createError(400, "Password don't match!"));
      //res.send("Pass not match")
    }else {
      await newUser.save();
    
      res.status(200).send('User successfully created!')
    //res.status(200).send("User has been created.");
    }
     
    
  } catch (err) {
    next(err);
  }
};



export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));
  
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT
    );

    const { password,  ...otherDetails } = user._doc;
   
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails } });
  } catch (err) {
    next(err);
  }
};
