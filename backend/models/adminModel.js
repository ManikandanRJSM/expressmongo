const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true, 'Please enter the first name'],
    },
    password : {
        type : String,
        required : [true, 'Please enter the last name'],
    },

},
{
    timestamp: true
})

module.exports = mongoose.model('adminModel', adminSchema, 'admin');
