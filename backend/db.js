const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://argha:admin@cluster0.d14p0p8.mongodb.net/test"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;