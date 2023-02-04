// Require dotenv configuration and database connection
const dotenv = require('dotenv').config();
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

// Database connection handler for Photo Collection
const dbGetPhotos = async () => {

    // Connection URI imported from dotenv
    const uri = process.env.MONGODB_URI;

    // Create client to interact with MongoDB
    const client = new MongoClient(uri);

    try {
        // Create Date object to track database connection
        let date = new Date();

        // Connect to the MongoDB cluster
        const database = client.db('spencer');
        const collection = database.collection('photos');
        const photos = await collection.find().toArray();
    
        console.log(`Database connection started: ${date}`);

        return photos;

    } catch (e) {

        // Log the error to the console
        console.error(e);

    } finally {

        // Close connection to the MongoDB cluster
        await client.close();

        console.log(`Database connection stopped: ${date}`);
    }
}

// Database connection handler
const dbGetPhoto = async (photoId) => {

    // Connection URI imported from dotenv
    const uri = process.env.MONGODB_URI;

    // Create client to interact with MongoDB
    const client = new MongoClient(uri);

    try {
        // Create Date object to track database connection
        let date = new Date();

        // Connect to the MongoDB cluster
        const id = new ObjectId(photoId);
        const database = client.db('spencer');
        const collection = database.collection('photos');      
        const photo = await collection.findOne({_id: id});
    
        console.log(`Database connection started: ${date}`);

        return photo;

    } catch (e) {

        // Log the error to the console
        console.error(e);

    } finally {

        // Close connection to the MongoDB cluster
        await client.close();

        console.log(`Database connection stopped: ${date}`);
    }
}

// Database connection handler
const dbPostPhoto = async (photoId) => {

    // Connection URI imported from dotenv
    const uri = process.env.MONGODB_URI;

    // Create client to interact with MongoDB
    const client = new MongoClient(uri);

    try {
        // Create Date object to track database connection
        let date = new Date();

        // Connect to the MongoDB cluster
        const database = client.db('spencer');
        const collection = database.collection('photos');
        const photo = await collection.insertOne(photoId);
    
        console.log(`Database connection started: ${date}`);

        return photo;

    } catch (e) {

        // Log the error to the console
        console.error(e);

    } finally {

        // Close connection to the MongoDB cluster
        await client.close();

        console.log(`Database connection stopped: ${date}`);
    }
}

// Export Photos model functions
module.exports = { dbGetPhotos, dbGetPhoto, dbPostPhoto };