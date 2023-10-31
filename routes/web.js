const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()

// usercontroller 
router.get('/getalluser',UserController.getalluser)
router.post('/userinsert',UserController.userinsert)
router.post('/verifylogin',UserController.verifylogin)








module.exports = router