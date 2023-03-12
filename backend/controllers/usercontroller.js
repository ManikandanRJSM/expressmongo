const ayncHandeler = require('express-async-handler')
const bcrypt = require('bcrypt')
const adminModel   = require('../models/adminModel')

const getUsers = ayncHandeler( async (request, response) => {
    const admin = await adminModel.findOne({id : request.adminAuth.id})
    response.status(200).json({data : admin})
})


const registerUser = (request, response) => {
    if(!request.body.name){
        response.status(400)
        throw new Error (`name field is required`)
    } 
    response.status(200).json({message : `register the user from controllers`})
}


const updateUser = (request, response) => {
    response.status(200).json({message : `update the user ${request.params.id} from controllers`})
}


const deleteUser = (request, response) => {
    response.status(200).json({message : `delete the user ${request.params.id} from controllers`})
}

module.exports = {
    getUsers,
    registerUser,
    updateUser,
    deleteUser
}
