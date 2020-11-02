const express=require("express");
const libraryController=require("../controllers/library");
const router=express.Router();
const User=require('../models/User');
const bcrypt=require('bcrypt');
const passport=require('passport');

router.post("/adminheader",libraryController.addProductForm);
router.post("/userLogin",libraryController.userLogin);
router.post("/add-books",libraryController.addBooks);
router.post("/adminheader",libraryController.fetchAllBooks);
router.post("/adminbooks",libraryController.adminEditBooks);
router.post("/user",libraryController.user);
router.post('/register',(req,res)=>{
    const{name,email,password,password2 }=req.body;
    let errors=[];

    //check required fields
    if(!name || !email || !password || !password2){
        errors.push({msg:'Please fill in all fields'});
    }
    if(password!=password2){
        errors.push({
            msg:'Password do not match'
        });
    }
    // check pass length 
    if(password.length<6){
           errors.push({msg:'Password should be atleast 6 charcaters'});
    }
    if(errors.length>0){
     res.render('userSignup',{
    errors,
    name,email,password,password2
     });
    }else{

        //validation passed
        User.findOne({email:email})
        .then(user=>{
            if(user){
               //useer exists
               errors.push({msg:"Email is already registered"})
               res.render('userSignup',{
                errors,
                name,email,password,password2
                 }); 
            }else{
                const newUser=new User({
                    name,
                    email,
                    password,
                    password2
                });

                //Hash Password
                bcrypt.genSalt(10,(err,salt)=>
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    if(err) throw err;
                    //Set password to hashed
                    newUser.password=hash;
                    // save user
                    newUser.save()
                    .then(user=>{
                        res.redirect('userLogin');
                    })
                    .catch(err=>console.log(err));
                }))
            }
        });
        
    }
});
//login handle
router.post('userLogin',(res,req,next)=>{
passport.authenticate('local',{
    successRedirect:'user',
    failureRedirect:'/userLogin',
    failureFlash:true
})(req,res,next);
});
 module.exports=router;