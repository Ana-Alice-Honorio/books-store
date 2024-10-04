const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let books = [];

app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    book_image: req.body.imageUrl,
    description: req.body.description,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
