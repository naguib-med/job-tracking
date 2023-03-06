const mongoose = require("mongoose");
const offreSchema = {
    type: 'object',
    properties: {
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
        datePublication: {
            type: String,
            description: 'Date of the publication',
        },
        dateLimite: {
            type: Date,
            required: true,
            description: 'Date limite of the candidature',
        },
        competences: {
            type: [String],
            default: [],
            description: 'Competences of the poste',
        },
        responsabilites: {
            type: [String],
            default: [],
            description: 'Responsabilites of the poste',
        },
    }
}

module.exports = offreSchema;