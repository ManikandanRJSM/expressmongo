const jwt          = require('jsonwebtoken')
const ayncHandeler = require('express-async-handler')
const adminModel   = require('../models/adminModel')



const jwtAuth = ayncHandeler( async (request, response, next) => {
    let token
    if (request.headers.authorization && request.headers.authorization.startsWith('Bearer')) {
        
        try {
            token = request.headers.authorization.split(' ')[1]
            const auth = jwt.verify(token, process.env.JWT_SECRET)
            request.adminAuth = adminModel.findOne({id : auth.id}).select('-password') // select the user details except password
            
            next()
        } catch (error) {
            response.status(401)
            throw new  Error ('Request not authorize')
        }


    } else {
        response.status(401)
        throw new  Error ('Token not present')
    }

    if (!token) {
        response.status(401)
        throw new  Error ('Not authorize no toke present')
    }
})

module.exports = { jwtAuth }
