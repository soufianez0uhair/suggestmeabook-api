const {booksSuggestionTemp} = require('../helpers/promptTemplates');
const openaiHelper = require('../helpers/openaiHelper');

const getBooks = async (req, res) => {
    const prompt = booksSuggestionTemp(req.body.input);

    const completion = await openaiHelper(prompt);

    const booksNames = completion.data.choices[0].text;

    
};

module.exports = getBooks;