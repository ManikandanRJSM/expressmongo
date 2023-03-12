const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    first_name : {
        type : string,
        required : [true, 'Please enter the first name'],
    },
    lastname_name : {
        type : string,
        required : [true, 'Please enter the last name'],
    },
    email : {
        type : string,
        required : [true, 'Please enter the email'],
    },
    password : {
        type : string,
        required : [true, 'Please enter the password'],
    },

},
{
    timestam: true
})

module.exports = mongoose.model('UserModel', userSchema);
