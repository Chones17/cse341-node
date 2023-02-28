// Require the Photo database model
const Photo = require('../model/Photo');

// Controller function to retrieve all photos
const getPhotos = async (req, res) => {

    await Photo.find().exec().then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json(results);
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    })
}

// Controller function to retrieve one photo
const getPhoto = async (req, res) => {

    await Photo.findOne({_id: req.params.id}).exec().then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json(results);
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    })
}

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

    await Photo.create(photo).then(() => {
        res.status(201);
        res.send();
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    });
}

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

    await Photo.updateOne({_id: req.params.id}, photo).then(() => {
        res.status(204);
        res.send();
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    });
}

// Controller function to delete photo
const deletePhoto = async (req, res) => {

    await Photo.deleteOne({_id: req.params.id}).then(() => {
        res.status(200);
        res.send();
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    });
}

// Export Photos controller functions
module.exports = { getPhotos, getPhoto, postPhoto, putPhoto, deletePhoto };