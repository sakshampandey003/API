const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()

// usercontroller 
router.get('/getalluser',UserController.getalluser)
router.post('/userinsert',UserController.userinsert)
router.get('/getuserdetails',UserController.getuserdetails)
router.get('/verifylogin',UserController.verifylogin)








module.exports = router