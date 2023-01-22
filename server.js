require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());

app.use('/api/books', require(path.join(__dirname, 'routes', 'books')));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});