// Require the Photo database connections
const { 
    dbGetUsers,
    dbGetUser, 
    dbPostUser, 
    dbPutUser, 
    dbDeleteUser } = require('../models/users');

// Controller function to retrieve all photos
const getUsers = async (req, res) => {

    await dbGetUsers().then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json(results);
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    })
}

// Controller function to retrieve a user
const getUser = async (req, res) => {

    await dbGetUser(req.params.id).then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json(results);
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    })
}

// Controller function to add a photo
const postUser = async (req, res) => {

    // Set the request body
    const user = {
        githubId: req.body.githubId,
        userName: req.body.userName
    };

    const response = await dbPostUser(user).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    });

    if (response.acknowledged) {
        res.status(201);
        res.json(response);
    } else {
        res.status(500);
        res.json(response.error || 'An error occurred while creating the document.');
    }
}

// Controller function to update photo
const putUser = async (req, res) => {

    // Set the request body
    const user = {
        githubId: req.body.githubId,
        userName: req.body.userName
    };

    const response = await dbPutUser(req.params.id, user).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    });

    if (response.modifiedCount > 0) {
        res.status(204);
        res.send();
    } else {
        res.status(500);
        res.json(response.error || 'An error occurred while updating the document.');
    }
}

// Controller function to delete photo
const deleteUser = async (req, res) => {

    const response = await dbDeleteUser(req.params.id).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    });

    if (response.deletedCount > 0) {
        res.status(200);
        res.send();
    } else {
        res.status(500);
        res.json(response.error || 'An error occurred while deleting the document.');
    }
}

// Export Photos controller functions
module.exports = { getUsers, getUser, postUser, putUser, deleteUser };