const express = require('express');
const router = express.Router();
const Entreprise = require('../models/entreprise');

// GET toutes les entreprises
router.get('/entreprises', async (req, res) => {
    try {
        const entreprises = await Entreprise.find();
        res.json(entreprises);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// POST une nouvelle entreprise
router.post('/entreprises', async (req, res) => {
    try {
        const nouvelleEntreprise = new Entreprise(req.body);
        const entreprise = await nouvelleEntreprise.save();
        res.status(201).json(entreprise);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET une entreprise par ID
router.get('/entreprises/:id', async (req, res) => {
    try {
        const entreprise = await Entreprise.findById(req.params.id);
        res.json(entreprise);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// PUT mettre à jour une entreprise
router.put('/entreprises/:id', async (req, res) => {
    try {
        const entreprise = await Entreprise.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(entreprise);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// DELETE supprimer une entreprise
router.delete('/entreprises/:id', async (req, res) => {
    try {
        const entreprise = await Entreprise.findByIdAndDelete(req.params.id);
        res.json(entreprise);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
