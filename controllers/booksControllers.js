const {booksSuggestionTemp} = require('../helpers/promptTemplates');
const openaiHelper = require('../helpers/openaiHelper');
const { getBook } = require('../helpers/getBook');

const getBooks = async (req, res) => {
    const prompt = booksSuggestionTemp(req.body.input);

    const completion = await openaiHelper(prompt);

    const booksNames = completion.data.choices[0].text.split(',');
    
    const books = new Array(6);
    
    for(let i = 0; i < booksNames.length; i++) {
        books[i] = await getBook(booksNames[i]);
    }

    return res
              .status(200)
              .json({
                books
              })
};

module.exports = getBooks;