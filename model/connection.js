// Require dotenv configuration and database connection
const dotenv = require('dotenv').config();
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

// Database connection handler
const dbGetContacts = async () => {

    // Connection URI imported from dotenv
    const uri = process.env.MONGODB_URI;

    // Create client to interact with MongoDB
    const client = new MongoClient(uri);

    try {

        // Connect to the MongoDB cluster
        const database = client.db('test');
        const collection = database.collection('contacts');
        const contacts = await collection.find().toArray();
    
        console.log('Database connection started');

        return contacts;

    } catch (e) {

        // Log the error to the console
        console.error(e);

    } finally {

        // Close connection to the MongoDB cluster
        await client.close();

        console.log('Database connection stopped')
    }
}

// Database connection handler
const dbOneContact = async (userId) => {

    // Connection URI imported from dotenv
    const uri = process.env.MONGODB_URI;

    // Create client to interact with MongoDB
    const client = new MongoClient(uri);

    try {

        // Connect to the MongoDB cluster
        const user = new ObjectId(userId);
        const database = client.db('test');
        const collection = database.collection('contacts');      
        const contact = await collection.findOne({_id: user});
    
        console.log('Database connection started');

        return contact;

    } catch (e) {

        // Log the error to the console
        console.error(e);

    } finally {

        // Close connection to the MongoDB cluster
        await client.close();

        console.log('Database connection stopped')
    }
}

// Database connection handler
const dbCreateContact = async (contact) => {

    // Connection URI imported from dotenv
    const uri = process.env.MONGODB_URI;

    // Create client to interact with MongoDB
    const client = new MongoClient(uri);

    try {

        // Connect to the MongoDB cluster
        const database = client.db('test');
        const collection = database.collection('contacts');
        const contacts = await collection.insertOne(contact);
    
        console.log('Database connection started');

        return contacts;

    } catch (e) {

        // Log the error to the console
        console.error(e);

    } finally {

        // Close connection to the MongoDB cluster
        await client.close();

        console.log('Database connection stopped')
    }
}

// Database connection handler
const dbUpdateContact = async (userId, updateContact) => {

    // Connection URI imported from dotenv
    const uri = process.env.MONGODB_URI;

    // Create client to interact with MongoDB
    const client = new MongoClient(uri);

    try {

        // Connect to the MongoDB cluster
        const user = new ObjectId(userId);
        const database = client.db('test');
        const collection = database.collection('contacts');      
        const contact = await collection.replaceOne({_id: user}, updateContact);
    
        console.log('Database connection started');

        return contact;

    } catch (e) {

        // Log the error to the console
        console.error(e);

    } finally {

        // Close connection to the MongoDB cluster
        await client.close();

        console.log('Database connection stopped')
    }
}

const dbDeleteContact = async (userId) => {

    // Connection URI imported from dotenv
    const uri = process.env.MONGODB_URI;

    // Create client to interact with MongoDB
    const client = new MongoClient(uri);

    try {

        // Connect to the MongoDB cluster
        const user = new ObjectId(userId);
        const database = client.db('test');
        const collection = database.collection('contacts');      
        const contact = await collection.deleteOne({_id: user});
    
        console.log('Database connection started');

        return contact;

    } catch (e) {

        // Log the error to the console
        console.error(e);

    } finally {

        // Close connection to the MongoDB cluster
        await client.close();

        console.log('Database connection stopped')
    }
}

module.exports = { 
    dbGetContacts, 
    dbOneContact, 
    dbCreateContact, 
    dbUpdateContact, 
    dbDeleteContact 
};