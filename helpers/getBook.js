const axios = require('axios');

exports.getBook = async (input) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}`);

    const book = response.data.items[0];

    return {
        id: book.id,
        title: `${book.volumeInfo.title}${book.volumeInfo.subtitle ? `: ${book.volumeInfo.subtitle}` : ''}`,
        authors: book.volumeInfo.authors,
        frontCover: book.volumeInfo.imageLinks?.thumbnail,
        description: book.volumeInfo.description,
        publisher: book.volumeInfo.publisher
    }
}