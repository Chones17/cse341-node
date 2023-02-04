// Require the Photo database connections
const { dbGetPhotos, dbGetPhoto, dbPostPhoto } = require('../models/photos');

// Controller function to retrieve all photos
const getPhotos = async (req, res) => {


    await dbGetPhotos().then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json(results);
    });
};

// Controller function to retrieve one photo
const getPhoto = async (req, res) => {

    await dbGetPhoto(req.params['id']).then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json(results);
    });
};

// Controller function to add a photo
const postPhoto = async (req, res) => {

    // Set the request body
    const photo = {
        title: req.body.title,
        photographer: req.body.photographer,
        description: req.body.description,
        location: req.body.location,
        publishDate: req.body.publishDate,
        fileName: req.body.fileName,
        filePath: req.body.filePath
    };

    const response = await dbPostPhoto(photo);

    if (response.acknowledged) {
        res.status(201);
        res.json(response);
    } else {
        res.status(500);
        res.json(response.error || 'An error occurred while creating the contact.');
    }
};

// Export Photos controller functions
module.exports = { getPhotos, getPhoto, postPhoto };