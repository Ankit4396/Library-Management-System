const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    inStock :{
        type:String,
        required:true,
    },

});

module.exports=mongoose.model("Books",booksSchema);