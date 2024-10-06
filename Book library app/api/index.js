const express = require('express');
const path = require('path');
const cors = require('cors');
const booksData = require('./data/books.json');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../frontend/build')));

function getRandomBook () {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    return randomBook;
}

app.get('/random-book', (req, res) => {
    res.json(getRandomBook());
});

app.get('/random-book-delayed', (req, res) => {
    setTimeout(() => {
        res.json(getRandomBook());
    }, 2000)
});


const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});