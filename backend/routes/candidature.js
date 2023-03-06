const express = require('express');
const router = express.Router();
const Candidature = require('../models/candidature');

// POST une nouvelle candidature
router.post('/candidatures', async (req, res) => {
    try {
        const nouvelleCandidature = new Candidature(req.body);
        const candidature = await nouvelleCandidature.save();
        res.status(201).json(candidature);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET toutes les candidatures
router.get('/candidatures', async (req, res) => {
    try {
        const candidatures = await Candidature.find();
        res.json(candidatures);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// GET une candidature par ID
router.get('/candidatures/:id', async (req, res) => {
    try {
        const candidature = await Candidature.findById(req.params.id);
        res.json(candidature);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// PUT mettre à jour une candidature
router.put('/candidatures/:id', async (req, res) => {
    try {
        const candidature = await Candidature.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(candidature);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// DELETE supprimer une candidature
router.delete('/candidatures/:id', async (req, res) => {
    try {
        const candidature = await Candidature.findByIdAndDelete(req.params.id);
        res.json(candidature);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
