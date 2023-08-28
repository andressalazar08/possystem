const userController = require('../controllers/userController');


const router = require('express').Router();

//Routes definition
//1. use localhost:4000/api/getUsers
router.get('/getUsers', userController.getUsers)



module.exports = router