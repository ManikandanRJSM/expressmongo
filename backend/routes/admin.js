const express = require('express')
const route = express.Router()
const { login, loggedAdmin } = require('../controllers/admincontroller');
const { getUsers, registerUser, updateUser, deleteUser } = require('../controllers/usercontroller');
const { jwtAuth } = require('../middleware/adminAuth');


route.post('/login', login)

route.get('/get_admin', loggedAdmin)

route.post('/register_user', jwtAuth, registerUser)

route.put('/update_user', jwtAuth, updateUser)

route.put('/delete_user', jwtAuth, deleteUser)


module.exports = route