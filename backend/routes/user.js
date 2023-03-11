const express = require('express')
const route = express.Router()
const { getUsers, registerUser, updateUser, deleteUser } = require('../controllers/usercontroller');


route.get('/', getUsers)

route.post('/register_user', registerUser)

route.put('/update_user/:id', updateUser)

route.delete('/delete_user/:id', deleteUser)


module.exports = route