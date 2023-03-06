const mongoose = require('mongoose');

const offreSchema = new mongoose.Schema({
    entreprise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Entreprise',
        required: true
    },
    poste: {
        type: String,
        required: true
    },
    datePublication: {
        type: Date,
        default: Date.now
    },
    dateLimite: {
        type: Date,
        required: true
    },
    competences: {
        type: [String],
        default: []
    },
    responsabilites: {
        type: [String],
        default: []
    }
});

module.exports = mongoose.model('Offre', offreSchema);