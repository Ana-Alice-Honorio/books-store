const express = require("express");
const cors = require("cors");
const app = express();

//https://www.npmjs.com/package/cors
app.use(cors());
app.use(express.json());

let books = [];

// requisição onde recebe os dados do forms do front
app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    book_image: req.body.imageUrl,
    description: req.body.description,
  };
  // a partir dos dados recebidos faço esse push (empurro) os dados para um novo item
  books.push(newBook);
  // se tudo estiver ok recebo novo livro e status 201
  res.status(201).json(newBook);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
