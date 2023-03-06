const mongoose = require("mongoose");
const candidatureSchema = {
    entreprise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Entreprise',
        required: true,
        description: 'ID of the entreprise',
    },
    poste: {
        type: String,
        required: true,
        description: 'Name of the poste',
    },
    dateEnvoi: {
        type: Date,
        default: Date.now,
        description: 'Date of the candidature',
    },
    statut: {
        type: String,
        enum: ['En attente', 'Refusée', 'Acceptée', 'Entretien', 'Finaliste', 'Offre'],
        default: 'En attente',
        description: 'Status of the candidature',
    },
    etapes: {
        type: [String],
        default: [],
        description: 'Etapes of the candidature',
    },
};

module.exports = candidatureSchema;