const express = require('express');
const swaggerUi = require('swagger-ui-express');
const specs  = require('./swagger');

const app = express();
// Configuration de l'application Express.js
app.use(express.json());

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
const candidatureRoutes = require('./routes/candidature');
const offreRoutes = require('./routes/offre');


// Définition des routes
app.use('/api', entrepriseRoutes);
app.use('/api', candidatureRoutes);
app.use('/api', offreRoutes);


app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(specs));



// Démarrage du serveur Node.js
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
