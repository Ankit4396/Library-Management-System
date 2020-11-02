const express = require('express');
const bcrypt=require('bcrypt');

const passport=require('passport');
const bodyParser = require("body-parser");
const mongoose=require('mongoose');
const libRoutes=require('./routes/home');
const mainRoutes=require('./routes/mainpage');
//const config=require('./config/database');
const path=require('path');
const app=express();
const session=require('express-session');
require('./config/passport')(passport);
app.set('views',"views");
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
  app.use(session({
      secret:'secret',
      resave:true,
      saveUninitialized:true
  }));
  //passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

//const Schema = mongoose.Schema;


app.use('/getBooks',(req,res,next)=>{
    const books=booksModel.find({},(err,data)=>{
        console.log(data);
        res.send(data);
    });
});
app.use(libRoutes);
app.use(mainRoutes);




app.use(express.static(path.join(__dirname,'public')));

const port=3002;
mongoose.connect("mongodb://localhost:27017/lms",{ useNewUrlParser: true , useUnifiedTopology: true} ).then((result)=>{
    app.listen(port,function(){
        console.log('server'+port);
    });    
console.log("Database connected succesfully");
})
.catch((err)=>{
    console.log("can't connect to database",err);
});

