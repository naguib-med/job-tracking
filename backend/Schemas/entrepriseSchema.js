const entrepriseSchema = {
    nom: {
        type: String,
        required: true,
        description: 'Name of the entreprise',
    },
    adresse: {
        type: String,
        required: true,
        description: 'Address of the entreprise',
    },
    ville: {
        type: String,
        required: true,
        description: 'City of the entreprise',
    },
    code_postal: {
        type: String,
        required: true,
        description: 'Postal code of the entreprise',
    },
    pays: {
        type: String,
        required: true,
        description: 'Country of the entreprise',
    },
}

module.exports = entrepriseSchema;