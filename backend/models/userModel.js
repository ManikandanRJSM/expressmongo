const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    first_name : {
        type : String,
        required : [true, 'Please enter the first name'],
    },
    last_name : {
        type : String,
        required : [true, 'Please enter the last name'],
    },
    email : {
        type : String,
        required : [true, 'Please enter the email'],
    },
    password : {
        type : String,
        required : [true, 'Please enter the password'],
    },

},
{
    timestamp: true
})

module.exports = mongoose.model('UserModel', userSchema, 'users');
