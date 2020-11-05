// const 

// Create and save a new book 
exports.create = (req, res) => {
    // validate request ...
    if (!req.body.name) {
        res.status(400).send({ message: 'Content can not be emty!' });
        return;
    }

    // Create a book ...
    const book = new Book({
        nameBook: req.body.nameBook,
        description: req.body.description,
        price: req.body.price,
        imageUrl: req.body.imageUrl
    });

    // Save the book ...
    book.save(book).then(data => { res.send(data) }).catch(err => { res.message || "some error occured while creating the Book." });
};    