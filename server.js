const express = require('express');
const path = require('path');

app.use(express.json());

const app = express();

const PORT = process.env.PORT || 4000;

app.use('/books', require(path.join(__dirname, 'routes', 'books')));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});