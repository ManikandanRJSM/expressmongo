const getUsers = (request, response) => {
    response.status(400).json({message : 'route to get all the users from controllers'})
}


const registerUser = (request, response) => {
    response.status(400).json({message : `register the user from controllers`})
}


const updateUser = (request, response) => {
    response.status(400).json({message : `update the user ${request.params.id} from controllers`})
}


const deleteUser = (request, response) => {
    response.status(400).json({message : `delete the user ${request.params.id} from controllers`})
}

module.exports = {
    getUsers,
    registerUser,
    updateUser,
    deleteUser
}