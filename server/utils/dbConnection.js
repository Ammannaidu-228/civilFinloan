const mongoose = require('mongoose');


async function connectToDatabase() {
    const dbURI = process.env.MONGODB_URI || 'mongodb+srv://civilFinAman:t3o7P8FxUaFLqu76@cluster0.ypxcjln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

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