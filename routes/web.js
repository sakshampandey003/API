const express = require('express')
const UserController = require('../controllers/UserController')
const CategoryController = require('../controllers/CategoryController')
const ProductController = require('../controllers/ProductController')
const router = express.Router()

// UserController 
router.get('/getalluser', UserController.getalluser)
router.post('/userinsert', UserController.userinsert)
router.post('/verifylogin', UserController.verifylogin)

//CategoryController
router.post('/categoryinsert', CategoryController.categoryinsert)
router.get('/categorydisplay', CategoryController.categorydisplay)
router.get('/categoryview', CategoryController.categoryview)
router.post('/categoryupdate', CategoryController.categoryupdate)
router.get('/categorydelete', CategoryController.categorydelete)

//ProductController
router.post('/createproduct', ProductController.createproduct)
router.get('/getallproduct', ProductController.getallproduct)
router.get('/getallproductdetail', ProductController.getallproductdetail)
router.post('/updateproduct', ProductController.updateproduct)
router.get('/deleteproduct', ProductController.deleteproduct)








module.exports = router