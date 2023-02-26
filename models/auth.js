const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    githubId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Auth', AuthSchema);