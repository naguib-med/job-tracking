const express = require('express');
const router = express.Router();
const Offre = require('../models/offre');

// post une offre
router.post('/offres', async (req, res) => {
    try {
        const nouvelleOffre = new Offre(req.body);
        await nouvelleOffre.save();
        res.json(nouvelleOffre);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

// put une offre
router.put('/offres/:id', async (req, res) => {
    try {
        const offre = await Offre.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!offre) {
            return res.status(404).json({ msg: 'Offre non trouvée' });
        }
        res.json(offre);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// delete une offre
router.delete('/offres/:id', async (req, res) => {
    try {
        const offre = await Offre.findByIdAndDelete(req.params.id);
        res.json(offre);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// get toutes les offres
router.get('/offres', async (req, res) => {
    try {
        const offres = await Offre.find().populate('entreprise', 'nom');
        res.json(offres);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

// get une offre par ID
router.get('/offres/:id', async (req, res) => {
    try {
        const offre = await Offre.findById(req.params.id).populate('entreprise', 'nom');
        res.json(offre);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
