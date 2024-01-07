const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:FSzAE8q87LSd2faf@cluster0.uof1tyg.mongodb.net/');

const BookSchema = new mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    genre: String,
    publication_year: Number,
    copies_available: Number,
    total_copies: Number
})
const AuthorSchema = new mongoose.Schema({
    author_id: Number,
    author_name: String
})
const MemberSchema = new mongoose.Schema({
    member_id: Number,
    member_name: String,
    contact_info: String,
    email: String
})
const TransactionSchema = new mongoose.Schema({
    transaction_id: Number,
    isbn: String,
    member_id: Number,
    checkout: String,
    return: String
})

const Book = mongoose.model("Book", BookSchema);
const Author = mongoose.model('Author', AuthorSchema);
const Member = mongoose.model('Member', MemberSchema);
const Transaction = mongoose.model('Transaction', TransactionSchema);

async function bookMiddleware(req, res, next) {
    const existingBook = await Book.findOne({ title: req.body.title });
    if (!existingBook) {
        next();
    } else {
        res.json({
            message: "Book already exists in Database",
            isbn: existingBook.isbn,
            title: existingBook.title,
            author: existingBook.author,
            genre: existingBook.genre,
            publication_year: existingBook.publication_year,
            copies_available: existingBook.copies_available,
            total_copies: existingBook.total_copies
        })
    }
}

app.post('/book/add', bookMiddleware, function (req, res) {
    Book.create({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        publication_year: req.body.publication_year,
        copies_available: req.body.copies_available,
        total_copies: req.body.total_copies
    })
    res.json({
        message: "Book Added successfully"
    })
})
app.get('/book/find', bookMiddleware, (req, res) => {
    res.json({
        message: "Sorry! We don't have any book with this title"
    })
})


app.listen(3000);