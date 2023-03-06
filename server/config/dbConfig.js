const mongoose = require('mongoose');
const dbURI = 'mongodb://admin:n010203@localhost/Candidature?authSource=admin';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, options);
        console.log('Connected to database');
    } catch (err) {
        console.log('Error connecting to database: ', err);
        process.exit(1);
    }
}

module.exports = connectDB;
