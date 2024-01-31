const mongoose = require('mongoose');

async function connectToDatabase() {
    const username = 'hektoraugusto';
    const password = 'apf5MGonfqsRxnU7';

    await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.nakvnef.mongodb.net/`);
    console.log("Conectou ao mongoose")
};

module.exports = {
    mongoose,
    connectToDatabase
};