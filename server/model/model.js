const mongoose = require('mongoose')




const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
})

const UserDB = mongoose.model('users', schema)

module.exports = UserDB

// users: dar line 20 baraye esme collection dar database estefade mishe , yani yek collection jadid ba hamin esm sakhte mishe