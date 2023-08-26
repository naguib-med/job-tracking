const mongoose = require('mongoose');
const eSchema = require('../Schemas/entrepriseSchema');

const entrepriseSchema = new mongoose.Schema(eSchema);

const Entreprise = mongoose.model('Entreprise', entrepriseSchema);

module.exports = Entreprise;