require('dotenv').config();
const mongoose = require('mongoose');

const databaseURL = process.env.DATABASE_URL;
const databaseUsername = process.env.DATABASE_USERNAME;
const databasePassword = process.env.DATABASE_PASSWORD;

const url = `mongodb+srv://${databaseUsername}:${databasePassword}@${databaseURL}/?retryWrites=true&w=majority`

async function connectToDatabase() {
    await mongoose.connect(url,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('Connected to database');
        }).catch((err) => {
            console.log('Error connecting to database');
        });
}

module.exports = {
    CONNECT: connectToDatabase
};
