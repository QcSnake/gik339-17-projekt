const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
