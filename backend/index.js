const express = require('express')
const dotenv = require('dotenv').config()
const { errhandler } = require('./middleware/errorhander')
const { connectDB } = require('./config/db')
const port = process.env.PORT

connectDB()

const app = express()

app.use(express.json()); // used to fetch request in the form of json
app.use(express.urlencoded({ extended : true })) // used to fetch request in the form of urlencode

app.use('/api/users', require('./routes/user')) // importing the user routes

app.use('/api/admin', require('./routes/admin')) // importing the user routes

app.use(errhandler)

app.listen(port, () => {
    console.log(`server running in ${port}`)
})
