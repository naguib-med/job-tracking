const mongoose = require('mongoose');

const entrepriseSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    ville: {
        type: String,
        required: true
    },
    code_postal: {
        type: String,
        required: true
    },
    pays: {
        type: String,
        required: true
    },
});

const Entreprise = mongoose.model('Entreprise', entrepriseSchema);

module.exports = Entreprise;