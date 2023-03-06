const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.listen(3000, () => console.log('Listening on port 3000!'));