const mongoose = require('mongoose');
const cSchema = require('../Schemas/candidatureSchema');

const candidatureSchema = new mongoose.Schema(cSchema);

module.exports = mongoose.model('Candidature', candidatureSchema);