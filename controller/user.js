// Require the User database model
const User = require('../model/User');

// Controller function to retrieve all photos
const getUsers = async (req, res) => {

    await User.find().exec().then(results => {
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

    await User.findOne({_id: req.params.id}).exec().then(results => {
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

    await User.create(user).then(() => {
        res.status(201);
        res.send();
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    });
}

// Controller function to update photo
const putUser = async (req, res) => {

    // Set the request body
    const user = {
        githubId: req.body.githubId,
        userName: req.body.userName
    };

    await User.updateOne({_id: req.params.id}, user).then(() => {
        res.status(204);
        res.send();
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    });
}

// Controller function to delete photo
const deleteUser = async (req, res) => {

    await User.deleteOne({_id: req.params.id}).then(() => {
        res.status(200);
        res.send();
    }).catch(error => {
        res.status(500);
        res.json(error || 'An error occurred while sending the request.');
    });
}

// Export Photos controller functions
module.exports = { getUsers, getUser, postUser, putUser, deleteUser };