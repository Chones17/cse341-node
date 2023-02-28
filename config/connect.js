const mongoose = require('mongoose').set('strictQuery', false);

const connect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch(error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connect;