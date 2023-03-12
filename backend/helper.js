const jwt = require('jsonwebtoken')
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

module.exports = { generateJWT }