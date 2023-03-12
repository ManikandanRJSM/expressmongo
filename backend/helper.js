const jwt     = require('jsonwebtoken')
const ayncHandeler      = require('express-async-handler')
const bcrypt  = require('bcrypt')


const generateJWT = (payload, user_type = null) => {
    if (user_type) {
        return jwt.sign({ id: payload, user_type : user_type }, process.env.JWT_SECRET, {
            expiresIn : '1h'
        })
    } else {
        return jwt.sign({ id: payload }, process.env.JWT_SECRET, {
            expiresIn : '1h'
        })
    }
    
}


const generateHash = ayncHandeler( async (password) => {
    
    const salt      = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
    
})

module.exports = { generateJWT, generateHash }
