var express = require('express');

const bodyParser = require("body-parser");
var mongoose=require('mongoose');
const libRoutes=require('./routes/home');
const mainRoutes=require('./routes/mainpage');
var config=require('./config/database');
const path=require('path');
mongoose.connect(config.database);
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
console.log('Connected to MongoDB');
});
var app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(libRoutes);
app.use(mainRoutes);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));


var port=3002;
app.listen(port,function(){
    console.log('server'+port);
})