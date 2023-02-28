const { Schema, model } = require('mongoose');

const photoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    photographer: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    location: {
        type: String,
        required: true
    },
    publishDate: {
        type: Date,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    }
})

module.exports = model('Photo', photoSchema);