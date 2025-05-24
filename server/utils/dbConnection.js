const mongoose = require('mongoose');


async function connectToDatabase() {
    const dbURI = process.env.MONGO_URI;

    try {
        await mongoose.connect(dbURI).then(() => {
            console.log('MongoDB connection successful');
        }).catch((error) => {
            console.error('MongoDB connection error:', error);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToDatabase;