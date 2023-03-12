const express = require('express')
const dotenv = require('dotenv').config()
const { errhandler } = require('./middleware/errorhander')
const port = process.env.PORT
const app = express()

app.use('/api/users', require('./routes/user')) // importin the user routes

app.use(errhandler)

app.listen(port, () => {
    console.log(`server running in ${port}`)
})
