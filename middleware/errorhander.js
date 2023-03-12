const errhandler = (error, request, response, next) => {
    const status_code = response.statusCode ? response.statusCode : 500

    response.status(status_code)

    response.json({
        message         : error.message,
        stack           : process.env.APP_ENV === 'develop' ? error.stack : null,
        status_code     : status_code
    })
}

module.exports = {
    errhandler
}