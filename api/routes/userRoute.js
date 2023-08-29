const userController = require('../controllers/userController');


const router = require('express').Router();

//Routes definition
//1. use localhost:4000/api/getUsers
router.get('/getUsers', userController.getUsers)
//2. create a user 
// use localhost:4000/api/addUser
router.post('/addUser', userController.addUser)
//3. update a user
//use localhost:4000/api/updateUser/:username
router.put('/updateUser/:username', userController.updateUser)

module.exports = router