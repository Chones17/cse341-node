// Require the Photo database connections
const { 
    dbGetPhotos, 
    dbGetPhoto, 
    dbPostPhoto, 
    dbPutPhoto, 
    dbDeletePhoto } = require('../models/photos');

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

    await dbGetPhoto(req.params.id).then(results => {
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
        res.json(response.error || 'An error occurred while creating the document.');
    }
};

// Controller function to update photo
const putPhoto = async (req, res) => {

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

    const response = await dbPutPhoto(req.params.id, photo);
  
    if (response.modifiedCount > 0) {
        res.status(204);
        res.send();
    } else {
        res.status(500);
        res.json(response.error || 'An error occurred while updating the document.');
    }
};

// Controller function to delete photo
const deletePhoto = async (req, res) => {

    const response = await dbDeletePhoto(req.params['id']);

    if (response.deletedCount > 0) {
        res.status(200);
        res.send();
    } else {
        res.status(500);
        res.json(response.error || 'An error occurred while deleting the document.');
    }
};

// Export Photos controller functions
module.exports = { getPhotos, getPhoto, postPhoto, putPhoto, deletePhoto };