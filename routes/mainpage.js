const express=require("express");
const libraryController=require("../controllers/library");
const router=express.Router();

router.get("/",libraryController.homepage);
router.get("/adminLogin",libraryController.adminLogin);
router.get("/adminLogin1",libraryController.adminLogin);
router.get("/userLogin",libraryController.userLogin);
router.get("/userSignup",libraryController.userSignup);
router.get("/adminbooks",libraryController.fetchAllBooks);
router.get("/book-detail/:bookId",libraryController.fetchById);
router.get("/adminbooks",libraryController.adminBooks);
router.get("/adminheader",libraryController.addProductForm);
router.get("/book-detail-update/:bookId",libraryController.updateBooks);
router.get("/delete/:bookId",libraryController.deleteBooks);
router.get("/underdeveloped",libraryController.ud);
router.get("/showcase",libraryController.showcase);

 module.exports=router;