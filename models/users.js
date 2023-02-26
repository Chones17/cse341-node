// Require dotenv configuration and database connection
require('dotenv').config();
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

// Database connection handler for Photo Collection
const dbGetUsers = async () => {

    // Connection URI imported from dotenv
    const uri = process.env.MONGODB_URI;

    // Create client to interact with MongoDB
    const client = new MongoClient(uri);

    try {
        
        // Create Date object to track database connection
        let date = new Date();

        // Connect to the MongoDB cluster
        const database = client.db('spencer');
        const collection = database.collection('users');
        const users = await collection.find().toArray();
    
        console.log(`Database connection started: ${date}`);

        return users;

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

// Database connection handler for Photo Collection
const dbGetUser = async (profileId) => {

    // Connection URI imported from dotenv
    const uri = process.env.MONGODB_URI;

    // Create client to interact with MongoDB
    const client = new MongoClient(uri);

    try {
        
        // Create Date object to track database connection
        let date = new Date();

        // Connect to the MongoDB cluster
        const id = new ObjectId(profileId);
        const database = client.db('spencer');
        const collection = database.collection('users');
        const user = await collection.findOne({githubId: id});
    
        console.log(`Database connection started: ${date}`);

        return user;

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
const dbPostUser = async (newUser) => {

    // Connection URI imported from dotenv
    const uri = process.env.MONGODB_URI;

    // Create client to interact with MongoDB
    const client = new MongoClient(uri);

    try {

        // Create Date object to track database connection
        let date = new Date();

        // Connect to the MongoDB cluster
        const database = client.db('spencer');
        const collection = database.collection('users');
        const user = await collection.insertOne(newUser);
    
        console.log(`Database connection started: ${date}`);

        return user;

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
const dbPutUser = async (userId, updateUser) => {

    // Connection URI imported from dotenv
    const uri = process.env.MONGODB_URI;

    // Create client to interact with MongoDB
    const client = new MongoClient(uri);

    try {

        // Create Date object to track database connection
        let date = new Date();

        // Connect to the MongoDB cluster
        const id = new ObjectId(userId);
        const database = client.db('spencer');
        const collection = database.collection('users');      
        const user = await collection.replaceOne({_id: id}, updateUser);
    
        console.log(`Database connection started: ${date}`);

        return user;

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
const dbDeleteUser = async (userId) => {

    // Connection URI imported from dotenv
    const uri = process.env.MONGODB_URI;

    // Create client to interact with MongoDB
    const client = new MongoClient(uri);

    try {

        // Create Date object to track database connection
        let date = new Date();

        // Connect to the MongoDB cluster
        const id = new ObjectId(userId);
        const database = client.db('spencer');
        const collection = database.collection('users');      
        const user = await collection.deleteOne({_id: id});
    
        console.log(`Database connection started: ${date}`);

        return user;

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
module.exports = { dbGetUsers, dbGetUser, dbPostUser, dbPutUser, dbDeleteUser };