const Books=require("../models/books");
exports.addProductForm=(req,res,next)=>{
    //res.sendFile(path.join(__dirname,"..","views","adminheader.html"));
    if(req.body.uname==="admin" && req.body.pass==="library123"){
   res.render("adminheader",
  
   {
     title:"LMS"
    
   });
   
  }
  else{
    res.render("adminLogin1",

    {
      title:"Librabian Login"
     
    });
  }
};
exports.homepage=(req,res,next)=>{
    //res.sendFile(path.join(__dirname,"..","views","adminheader.html"));
   res.render("homepage",
  
   {
     title:"LMS"
    
   });
};
exports.adminLogin=(req,res,next)=>{
  //res.sendFile(path.join(__dirname,"..","views","adminheader.html"));
 res.render("adminLogin",

 {
   title:"Librabian Login"
  
 });
};
exports.adminBooks=(req,res,next)=>{
  //res.sendFile(path.join(__dirname,"..","views","adminheader.html"));
 res.render("adminbooks",

 {
   title:"Librabian "
  
 });
};
exports.adminEditBooks=(req,res,next)=>{
  const name = req.body.name;
  const author = req.body.author;
  const inStock = req.body.inStock;
  const books=new Books({
     name:name,
     author:author,
     inStock:inStock,
  });
  Books.updateOne({
    name:name,
    author:author,
    inStock:inStock,
  }).then((data)=>{
    res.render("adminheader",{
      book:data,
    path:"adminheader",
    title:"Librarian",
    });
  });
}



exports.addBooks=(req,res,next)=>{
  const name = req.body.name;
  const author = req.body.author;
  const inStock = req.body.inStock;
  const books=new Books({
     name:name,
     author:author,
     inStock:inStock,
  });

  books.save().then(result=>{
    // res.json({
    //   status:"success",
    //   message:"books added succesfully",
    //   data:result,
    // });
    res.redirect("adminbooks");
  }).catch(err=>{
    // res.json({
    //   status:"error",
    //   message:"can't add product",
    // });
    res.render("404",{
      title:"Error",
    });
  });
};
exports.fetchAllBooks=(req,res,next)=>{
 Books.find().then((result)=>{
  //  res.json({
  //    status:"Success",
  //    message:"Books from db",
  //    data:result,
  //  });
  res.render("adminbooks",{

    book:result,
    path:"adminheader",
    title:"Librarian",
  });
 }).catch(err=>{
  //  res.json({
  //    status:"error",
  //    message:"fetching error",
  //    data:result,
  //  });
  res.render("404",{
    title:"Error",
  });
 });
};

exports.fetchById=(req,res,next)=>{
  const bookId=req.params.bookId;
  Books.findById(bookId).then(result=>{
    // res.json({
    //   status:"success",
    //   data:result,
    // });
    res.render('book-detail',{
    title:"Book Details",
    path:"book-detail/id",
    book:result,
    })
  }).catch(err=>{
    res.json({
      status:"error",
      message:"not found",
    });
  });
};
exports.updateBooks=(req,res,next)=>{
  var id=req.params.bookId;
  var edit=Books.findById(id);
  edit.exec(function(err,data){
    if(err)throw err;
    res.render('book-detail-update',{records:data});
  });
  // const name=req.body.name;
//   const author=req.body.author;
//   const inStock=req.body.inStock;
//   const bookId=req.params.bookId;
//   Books.updateOne(
//     {_id:bookId},{$set:{
//   name:name,
//   author:author,
//   inStock:inStock,
//   },
// }
//   ).then((result)=>{
//     res.render("book-detail-update",{

//       book:result,
//       path:"adminheader",
//       title:"Librarian",
//     });
  // }).catch(err=>{
  //   //  res.json({
  //   //    status:"error",
  //   //    message:"fetching error",
  //   //    data:result,
  //   //  });
  //   res.render("404",{
  //     title:"Error",
  //   });
  //  });
};


exports.adminBooks=(req,res,next)=>{
  //res.sendFile(path.join(__dirname,"..","views","adminheader.html"));
 res.render("adminbooks",

 {
   title:"Librabian "
  
 });
};
exports.user=(req,res,next)=>{
  //res.sendFile(path.join(__dirname,"..","views","adminheader.html"));
 res.render("user",

 {
   title:" Dashboard "
  
 });
};
exports.userLogin=(req,res,next)=>{
  //res.sendFile(path.join(__dirname,"..","views","adminheader.html"));
 res.render("userLogin",

 {
   title:"User Login"
  
 });
 
};
exports.showcase=(req,res,next)=>{
  Books.find().then((result)=>{
    //  res.json({
    //    status:"Success",
    //    message:"Books from db",
    //    data:result,
    //  });
    res.render("showcase",{
  
      book:result,
      path:"adminheader",
      title:"Library",
    });
   }).catch(err=>{
    //  res.json({
    //    status:"error",
    //    message:"fetching error",
    //    data:result,
    //  });
    res.render("404",{
      title:"Error",
    });
   });
 
};
exports.ud=(req,res,next)=>{
  //res.sendFile(path.join(__dirname,"..","views","adminheader.html"));
 res.render("underdeveloped",

 {
   title:"coming soon"
  
 });
 
};
exports.userSignup=(req,res,next)=>{
  //res.sendFile(path.join(__dirname,"..","views","adminheader.html"));
 res.render("userSignup",

 {
   title:"Sign up"
  
 });
};

exports.addBooks=(req,res,next)=>{
  const name = req.body.name;
  const author = req.body.author;
  const inStock = req.body.inStock;
  const books=new Books({
     name:name,
     author:author,
     inStock:inStock,
  });

  books.save().then(result=>{
    // res.json({
    //   status:"success",
    //   message:"books added succesfully",
    //   data:result,
    // });
    res.redirect("adminbooks");
  }).catch(err=>{
    // res.json({
    //   status:"error",
    //   message:"can't add product",
    // });
    res.render("404",{
      title:"Error",
    });
  });
};

exports.deleteBooks=(req,res,next)=>{

  var id=req.params.bookId;
 var del=Books.findByIdAndDelete(id);
  del.exec(function(err){
if(err)throw err;
res.redirect("/adminbooks");
  });

};

