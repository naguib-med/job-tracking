const express = require('express');
const router = express.Router();
const Offre = require('../models/offre');

// post une offre
/**
 * @swagger
 * /offres:
 *   post:
 *     summary: Create new offre
 *     description: Create a new offre
 *     requestBody:
 *       description: Offre object to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Offre'
 *     responses:
 *       200:
 *         description: The newly created offre
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Offre'
 *       500:
 *         description: Internal server error
 */
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
/**
 * @swagger
 * /offres/{id}:
 *   put:
 *     summary: Update offre by ID
 *     description: Update a single offre by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the offre to update
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Offre object to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Offre'
 *     responses:
 *       200:
 *         description: The updated offre
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Offre'
 *       404:
 *         description: Offre not found
 *       500:
 *         description: Internal server error
 */
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
/**
 * @swagger
 * /offres/{id}:
 *   delete:
 *     summary: Delete offre by ID
 *     description: Delete a single offre by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the offre to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The deleted offre
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Offre'
 *       500:
 *         description: Internal server error
 */
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
/**
 * @swagger
 * /offres:
 *   get:
 *     summary: Get all offres
 *     description: Retrieve a list of all offres
 *     responses:
 *       200:
 *         description: A list of offres
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Offre'
 *       500:
 *         description: Internal server error
 */
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
/**
 * @swagger
 * /offres/{id}:
 *   get:
 *     summary: Get offre by ID
 *     description: Retrieve a single offre by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the offre to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The retrieved offre
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Offre'
 *       404:
 *         description: Offre not found
 *       500:
 *         description: Internal server error
 */
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
