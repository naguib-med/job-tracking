const express = require('express');
const router = express.Router();
const Candidature = require('../models/candidature');

/**
 * @swagger
 * /candidatures:
 *   post:
 *     summary: Create a new candidature
 *     description: Create a new candidature
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Candidature'
 *     responses:
 *       201:
 *         description: Candidature created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Candidature'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/candidatures', async (req, res) => {
    try {
        const nouvelleCandidature = new Candidature(req.body);
        const candidature = await nouvelleCandidature.save();
        res.status(201).json(candidature);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

/**
 * @swagger
 * /candidatures:
 *   get:
 *     summary: Get all candidatures
 *     description: Retrieve a list of all candidatures
 *     responses:
 *       200:
 *         description: A list of candidatures
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Candidature'
 *       500:
 *         description: Internal server error
 */

router.get('/candidatures', async (req, res) => {
    try {
        const candidatures = await Candidature.find();
        res.json(candidatures);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

/**
 * @swagger
 * /candidatures/{id}:
 *   get:
 *     summary: Get candidature by ID
 *     description: Retrieve a single candidature by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the candidature to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single candidature
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Candidature'
 *       404:
 *         description: Candidature not found
 *       500:
 *         description: Internal server error
 */

router.get('/candidatures/:id', async (req, res) => {
    try {
        const candidature = await Candidature.findById(req.params.id);
        res.json(candidature);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

/**
 * @swagger
 * /candidatures/{id}:
 *   put:
 *     summary: Update candidature by ID
 *     description: Update a single candidature by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the candidature to update
 *         schema:
 *           type: string
 *       - in: body
 *         name: candidature
 *         required: true
 *         description: Candidature object to update
 *         schema:
 *           $ref: '#/components/schemas/Candidature'
 *     responses:
 *       200:
 *         description: A single candidature
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Candidature'
 *       404:
 *         description: Candidature not found
 *       500:
 *         description: Internal server error
 */

router.put('/candidatures/:id', async (req, res) => {
    try {
        const candidature = await Candidature.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(candidature);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

/**
 * @swagger
 * /candidatures/{id}:
 *   delete:
 *     summary: Delete candidature by ID
 *     description: Delete a single candidature by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the candidature to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single candidature
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Candidature'
 *       404:
 *         description: Candidature not found
 *       500:
 *         description: Internal server error
 */

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
