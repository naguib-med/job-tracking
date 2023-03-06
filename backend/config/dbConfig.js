const mongoose = require('mongoose');
const dbURI = 'mongodb://admin:n010203@localhost/Candidatures?authSource=admin';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(dbURI, options, (err) => {
    if (err) {
        console.log('Error connecting to database: ', err);
    } else {
        console.log('Connected to database');
    }
});