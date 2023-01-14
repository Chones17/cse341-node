// Require dotenv configuration and database connection
const dotenv = require('dotenv').config();
const { MongoClient } = require('mongodb');

const database = async (client) => {

    const db = client;

    console.log(db);
}

// Database connection handler
const main = async () => {

    // Connection URI imported from dotenv
    const uri = process.env.URI;

    // Create client to interact with MongoDB
    const client = new MongoClient(uri);

    try {

        // Connect to the MongoDB cluster
        await client.connect();

        await database(client);

    } catch (e) {

        // Log the error to the console
        console.error(e);

    } finally {

        // Close connection to the MongoDB cluster
        await client.close();
    }
}

// Catch errors
main().catch(console.error);

module.exports = main;