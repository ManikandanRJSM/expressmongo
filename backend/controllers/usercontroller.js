const ayncHandeler      = require('express-async-handler')
const { generateHash }  = require('../helper')
const user              = require('../models/userModel')

const getUsers = ayncHandeler( async (request, response) => {
    const users     = await user.find();
    const userData  = []
    for (const iterator of users) {
        userData.push({
            _id : iterator._id,
            first_name : iterator.first_name,
            last_name : iterator.last_name,
            email : iterator.email,
        })
    }
    
    if (userData) {
        response.status(200).json({
            status_code : 1,
            message : `Users list`,
            data :userData
        })
    } else {
        response.status(400).json({ status_code : 0, message : `Something went wrong please try again.!` })
    }
})


const registerUser = ayncHandeler( async (request, response) => {

    const password  = await generateHash(request.body.password)
    const registerUser = await user.create({
        first_name  : request.body.first_name,
        last_name   : request.body.last_name,
        email       : request.body.email,
        password    : password
    })

    if (registerUser) {
        response.status(200).json({ status_code : 1, message : `${registerUser._id} User created sucessfully` })
    } else {
        response.status(400).json({ status_code : 0, message : `Something went wrong please try again.!` })
    }
})


const updateUser = ayncHandeler( async (request, response) => {
    const _id = request.params.id
    const checkUser = await user.findById(_id)
    if (!checkUser) {
        response.status(400).json({status_code  : 0, message : `User Not Found`})
    }

    const password   = await generateHash(request.body.password)
    const updateUser = await user.updateOne({_id : _id},
        {
            first_name  : request.body.first_name,
            last_name   : request.body.last_name,
            email       : request.body.email,
            password    : password
        })

    if (updateUser) {
        response.status(200).json({ status_code : 1, message : `User updated sucessfullty` })
    } else {
        response.status(400).json({status_code : 0, message : `Something went wrong please try again.!`})
    }
    
})


const deleteUser = ayncHandeler( async (request, response) => {

    const _id = request.params.id
    const checkUser = await user.findById(_id)
    if (!checkUser) {
        response.status(400).json({status_code  : 0, message : `User Not Found`})
    }
    const deleteUser = await user.deleteOne({_id : _id});

    if (deleteUser) {
        response.status(200).json({ status_code : 1, message : `User deleted sucessfullty` })
    } else {
        response.status(400).json({status_code : 0, message : `Something went wrong please try again.!`})
    }
})

module.exports = {
    getUsers,
    registerUser,
    updateUser,
    deleteUser
}
