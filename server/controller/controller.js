const UserDb = require('../model/model')





//* Create and save new user
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Content can not be emtpy!' })
        return
    }

    // new user
    const newUser = new UserDb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
    })

    // save newUser in database
    newUser
        .save(newUser)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || 'error to occured while create a opretion' }))
}



//* retrieve and return all user/retrive and return a single user
exports.find = (req, res) => {
}



//* Update a new identified user bu user id 
exports.update = (req, res) => {
}



//* Delete a user with specified user id
exports.delete = (req, res) => {
}