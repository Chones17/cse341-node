// Require dotenv configuration and database connection
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

// Import dotenv into process.env
dotenv.config();

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

    } catch (error) {

        // Log the error to the console
        console.error(error);

    } finally {
        
        // Create Date object to track database connection
        let date = new Date();

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

    } catch (error) {

        // Log the error to the console
        console.error(error);

    } finally {

        // Create Date object to track database connection
        let date = new Date();

        // Close connection to the MongoDB cluster
        await client.close();

        console.log(`Database connection stopped: ${date}`);
    }
}

// Database connection handler
const dbPostPhoto = async (newPhoto) => {

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
        const photo = await collection.insertOne(newPhoto);
    
        console.log(`Database connection started: ${date}`);

        return photo;

    } catch (error) {

        // Log the error to the console
        console.error(error);

    } finally {

        // Create Date object to track database connection
        let date = new Date();

        // Close connection to the MongoDB cluster
        await client.close();

        console.log(`Database connection stopped: ${date}`);
    }
}

// Database connection handler
const dbPutPhoto = async (photoId, updatePhoto) => {

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
        const photo = await collection.replaceOne({_id: id}, updatePhoto);
    
        console.log(`Database connection started: ${date}`);

        return photo;

    } catch (error) {

        // Log the error to the console
        console.error(error);

    } finally {

        // Create Date object to track database connection
        let date = new Date();

        // Close connection to the MongoDB cluster
        await client.close();

        console.log(`Database connection stopped: ${date}`);
    }
}

// Database connection handler
const dbDeletePhoto = async (photoId) => {

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
        const photo = await collection.deleteOne({_id: id});
    
        console.log(`Database connection started: ${date}`);

        return photo;

    } catch (error) {

        // Log the error to the console
        console.error(error);

    } finally {

        // Create Date object to track database connection
        let date = new Date();

        // Close connection to the MongoDB cluster
        await client.close();

        console.log(`Database connection stopped: ${date}`);
    }
}

// Export Photos model functions
module.exports = { 
    dbGetPhotos, 
    dbGetPhoto, 
    dbPostPhoto, 
    dbPutPhoto, 
    dbDeletePhoto 
};