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
        .then(data => {
            // res.send(data)
            res.redirect("/")
        })
        .catch(err => res.status(500).send({ message: err.message || 'error to occured while create a opretion' }))

}



//* retrieve and return all user/retrive and return a single user
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id
        UserDb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found user with id" + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error retrieving user with id" + id })
            })

    } else {
        UserDb.find()
            .then(user => {
                // Get single user :  res.send(user.find(item => item.name === req.params.name))
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || 'Error occurred while retriving user information' })
            })
    }
}



//* Update a new identified user bu user id 
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Data to update can not be empty" })
    }

    const id = req.params.id
    UserDb.findByIdAndUpdate(id, req.body)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Can not update user with ${id}. Maybe user not found` })
            } else {
                // res.send(data)
                res.redirect('/')
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error update user information" })
        })
}



//* Delete a user with specified user id
exports.delete = (req, res) => {
    const id = req.params.id

    UserDb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Can not update user with ${id}. Maybe user not found` })
            } else {
                // res.send({ message: "User was delete successfully!" })
                res.redirect('/')
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error delete user information" })
        })
}