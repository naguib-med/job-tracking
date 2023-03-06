const express = require('express');
const app = express();
// Import de la fonction de connexion à la base de données
const connectDB = require('./config/dbConfig');
// Connexion à la base de données
connectDB().then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log('Error connecting to database: ', err);
    process.exit(1);
});

// Import des routes pour l'entité "entreprise"
const entrepriseRoutes = require('./routes/entreprise');

// Configuration de l'application Express.js
app.use(express.json());

// Définition des routes pour l'entité "entreprise"
app.use('/api', entrepriseRoutes);


// Démarrage du serveur Node.js
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
