const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

global.books = [
    {name: "Name of the Wind", author: "Patrick Rothfuss"},
    {name: "Of Mice and Men", author: "John Steinbeck"}
];

app.get('/sanity', (req, res) => {
    res.send('OK');
});

app.get('/books', (req, res) => {
    res.send(books);
});

app.get('/book/:index', (req, res) => {
    const index = req.params.index;

    if (books[index]) {
        res.send(books[index]);
    } else {
        res.status(404).send('Book not found');
    }
});

app.post('/book', (req, res) => {
    if (req.body.name && req.body.author) {
        books.push({
            name: req.body.name,
            author: req.body.author
        });

        res.send('successfully add');
    } else {
        res.status(400).send('include book name and author');
    }
});

app.listen(port, () => {
    console.log('ex5 is running!! ! ! ');
})