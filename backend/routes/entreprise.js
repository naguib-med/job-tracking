const express = require('express');
const router = express.Router();
const Entreprise = require('../models/entreprise');

// Get all entreprises

router.get('/entreprises', async (req, res) => {
    try {
        const entreprises = await Entreprise.find({});
        res.json(entreprises);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/entreprises', async (req, res) => {
    try {
        const nouvelleEntreprise = new Entreprise(req.body);
        const entreprise = await nouvelleEntreprise.save();
        res.status(201).json(entreprise);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
