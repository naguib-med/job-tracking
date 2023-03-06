const mongoose = require('mongoose');

const candidatureSchema = new mongoose.Schema({
    entreprise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Entreprise',
        required: true
    },
    poste: {
        type: String,
        required: true
    },
    dateEnvoi: {
        type: Date,
        default: Date.now
    },
    statut: {
        type: String,
        enum: ['En attente', 'Refusée', 'Acceptée', 'Entretien', 'Finaliste', 'Offre'],
        default: 'En attente'
    },
    etapes: {
        type: [String],
        default: []
    }
});

module.exports = mongoose.model('Candidature', candidatureSchema);