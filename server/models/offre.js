const mongoose = require('mongoose');
const oSchema = require('../Schemas/offreSchema');
const offreSchema = new mongoose.Schema(oSchema);

module.exports = mongoose.model('Offre', offreSchema);