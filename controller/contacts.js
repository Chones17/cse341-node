const { contacts, oneContact } = require('../model/connection');

// Controller function for all contacts
const getContacts = async (req, res) => {

    await contacts().then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(results);
    });
};

// Controller function for all contacts
const getOne = async (req, res) => {

    await oneContact(req.params['id']).then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(results);
    });
};


// Export controller function
module.exports = { getContacts, getOne };