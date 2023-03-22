const mongoose = require('mongoose');

const mongoUri = "mongodb+srv://iamarghamallick:argha@demo.xiar6hb.mongodb.net/inotebook"

async function connectToMongo() {
    try {
        await mongoose.connect(mongoUri);
        console.log("Connected to mongo successfully");
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectToMongo;