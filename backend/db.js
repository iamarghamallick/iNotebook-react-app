const mongoose = require('mongoose');
require('dotenv').config();

const mongoUri = process.env.mongoUri

async function connectToMongo() {
    try {
        await mongoose.connect(mongoUri);
        console.log("Connected to mongo successfully");
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectToMongo;