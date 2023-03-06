const express = require('express');
const router = express.Router();
const Entreprise = require('../models/entreprise');

// GET toutes les entreprises
/**
 * @swagger
 * /entreprises:
 *   get:
 *     summary: Get all entreprises
 *     description: Retrieve a list of all entreprises
 *     responses:
 *       200:
 *         description: A list of entreprises
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Entreprise'
 *       500:
 *         description: Internal server error
 */

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
/**
 * @swagger
 * /entreprises:
 *   post:
 *     summary: Create a new entreprise
 *     description: Create a new entreprise
 *     requestBody:
 *       description: Entreprise object to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Entreprise'
 *     responses:
 *       201:
 *         description: The created entreprise
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entreprise'
 *       500:
 *         description: Internal server error
 */
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
/**
 * @swagger
 * /entreprises/{id}:
 *   get:
 *     summary: Get entreprise by ID
 *     description: Retrieve a single entreprise by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the entreprise to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single entreprise
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entreprise'
 *       404:
 *         description: Entreprise not found
 *       500:
 *         description: Internal server error
 */
router.get('/entreprises/:id', async (req, res) => {
    try {
        const entreprise = await Entreprise.findById(req.params.id);
        res.json(entreprise);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// PUT mettre à jour une entreprise
/**
 * @swagger
 * /entreprises/{id}:
 *   put:
 *     summary: Update entreprise by ID
 *     description: Update a single entreprise by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the entreprise to update
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Entreprise object to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Entreprise'
 *     responses:
 *       200:
 *         description: The updated entreprise
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entreprise'
 *       404:
 *         description: Entreprise not found
 *       500:
 *         description: Internal server error
 */
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
/**
 * @swagger
 * /entreprises/{id}:
 *   delete:
 *     summary: Delete entreprise by ID
 *     description: Delete a single entreprise by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the entreprise to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The deleted entreprise
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entreprise'
 *       404:
 *         description: Entreprise not found
 *       500:
 *         description: Internal server error
 */
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
