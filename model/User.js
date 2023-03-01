const { Schema, model } = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema({
    githubId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
    }
});

module.exports = model('User', userSchema.plugin(findOrCreate));