const express = require('express');
const getBooks = require('../controllers/booksControllers');

const router = express.Router();

router
    .post('/', getBooks)

module.exports = router