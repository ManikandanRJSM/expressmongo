const ayncHandeler          = require('express-async-handler')
const jwt                   = require('jsonwebtoken')
const bcrypt                = require('bcrypt')
const adminModel            = require('../models/adminModel')
const { generateJWT }       = require('../helper')

const login = ayncHandeler( async (request, response) => {
    const username = request.body.username;
    const password = request.body.password;
    if(!username || !password){
        response.status(400)
        throw Error (`Username And Password Feilds cannot be empty`)
    }

    const admin_auth    = await adminModel.findOne({ username : username })
    const hashedPwd     = await bcrypt.compare(password, admin_auth.password)
    if(!admin_auth || !hashedPwd){
        response.status(401).json({ status_code : 0, message : 'Inavalid credentials' })
    }
    
    const data = {
        username : admin_auth.username,
        token : await generateJWT(admin_auth._id),
    }

    response.status(200).json({ status_code : 1, message : 'Loggein', data : data })
    
})

const loggedAdmin = ayncHandeler( async (request, response) => {
    response.status(200).json({ message : 'admin logged in' });
})

module.exports = {
    login,
    loggedAdmin
}