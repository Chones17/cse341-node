const { 
    dbGetContacts, 
    dbOneContact, 
    dbCreateContact, 
    dbUpdateContact, 
    dbDeleteContact 
} = require('../model/connection');

// Controller function to retrieve all contacts
const getContacts = async (req, res) => {


    await dbGetContacts().then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json(results);
    });
};

// Controller function to retrieve one contact
const getOne = async (req, res) => {

    await dbOneContact(req.params['id']).then(results => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json(results);
    });
};

// Controller function to create contacts
const createContact = async (req, res) => {

    // Set the request body
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const response = await dbCreateContact(contact);

    if (response.acknowledged) {
        res.status(201);
        res.json(response);
    } else {
        res.status(500);
        res.json(response.error || 'An error occurred while creating the contact.');
    }
};

// Controller function to update contacts
const updateContact = async (req, res) => {

    // Set the request body
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const response = await dbUpdateContact(req.params['id'], contact);
  
    if (response.modifiedCount > 0) {
        res.status(204);
        res.send();
    } else {
        res.status(500);
        res.json(response.error || 'An error occurred while updating the contact.');
    }
};

const deleteContact = async (req, res) => {

    const response = await dbDeleteContact(req.params['id']);

    if (response.deletedCount > 0) {
        res.status(200);
        res.send();
    } else {
        res.status(500);
        res.json(response.error || 'An error occurred while deleting a contact');
    }
};

// Export controller function
module.exports = { getContacts, getOne, createContact, updateContact, deleteContact };