const swaggerJsdoc = require('swagger-jsdoc');
const candidatureSchema = require('../Schemas/candidatureSchema');
const entrepriseSchema = require('../Schemas/entrepriseSchema');
const offreSchema = require('../Schemas/offreSchema');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Documentation for API endpoints',
        },
        servers: [
            {
                url: 'http://localhost:5000/api',
                description: 'Development server',
            },
        ],
        components: {
            schemas: {
                Candidature: candidatureSchema,
                Entreprise: entrepriseSchema,
                Offre: offreSchema,
                Error: {
                    type: 'object',
                    properties: {
                        message: {
                            type: 'string',
                            description: 'Error message',
                        },
                        code: {
                            type: 'string',
                            description: 'Error code',
                        },
                    }
                }
            },
        },
    },
    apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
