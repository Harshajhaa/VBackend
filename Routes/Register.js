// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// // const { body, validationResult } = require('express-validator');
// // const bcrypt = require("bcryptjs")
// // const jwt = require("jsonwebtoken")
// // const jwtSecret = "MynameisEndtoEndYouTubeChannel1$#"

// router.post(
//   "/register",

//   // [
//   //   body('email').isEmail(),
//   //   body('password').isLength({ min: 5 }).withMessage('Invalid Password')
//   // ],
 
//   async (req, res) => {
//     console.log(req.body.fullname);
//     console.log(req.body.email);
//     console.log(req.body.password);
//     console.log(req.body.confirmpassword);
//     try {
//         // if(req.body.password!==req.body.confirmpassword)
//         // {
//         //     return res.json({ success: false });
//         // }
//       //   let userData = await User.findOne({email:req.body.email});
//       // if(!userData){
//       //   return res.json({ success: false,errors: "email already exists"})
//       // }
//        console.log("hello")

//       await User.create({
//         fullname: req.body.fullname,
//         email: req.body.email,
//         password: req.body.password,
//         confirmpassword: req.body.confirmpassword
//       });
//       console.log("success");
//        res.json({ success: true });
//     } catch (error) {
//       console.log(error);
//       res.json({ success: false ,error:"error"});
//     }
//   }
// );

// module.exports = router;
