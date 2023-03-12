const express                   = require('express')
const route                     = express.Router()
const { login, loggedAdmin }    = require('../controllers/admincontroller');
const { getUsers, registerUser, updateUser, deleteUser } = require('../controllers/usercontroller');
const { jwtAuth }               = require('../middleware/adminAuth');


route.post('/login', login)

route.get('/get_admin', loggedAdmin)

route.get('/get_users', jwtAuth, getUsers)

route.post('/register_user', jwtAuth, registerUser)

route.put('/update_user/:id', jwtAuth, updateUser)

route.delete('/delete_user/:id', jwtAuth, deleteUser)


module.exports = route
