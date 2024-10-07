const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// Middleware
//https://www.npmjs.com/package/cors
app.use(cors());
app.use(express.json());

// Conectando ao MongoDB (local)
mongoose
  .connect("mongodb://localhost:27017/bookstore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((error) => console.error("Erro ao conectar ao MongoDB:", error));

// Criando o schema e modelo de Livro, dados que salvarei
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  book_image: { type: String, required: true },
  description: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

// requisição onde recebe os dados do forms do front
app.post("/books", async (req, res) => {
  const { title, author, imageUrl, description } = req.body;

  const newBook = new Book({
    title,
    author,
    book_image: imageUrl,
    description,
  });

  try {
    // Salva no MongoDB
    const savedBook = await newBook.save();
    // Se tudo ok, retorna o livro salvo
    res.status(201).json(savedBook);
  } catch (error) {
    console.error("Erro ao adicionar livro:", error);
    res.status(500).json({ error: "Erro ao adicionar livro" });
  }
});

// Rota GET para listar todos os livros já com o novo adicionado
app.get("/books", async (req, res) => {
  try {
    // Recupera todos os livros
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    res.status(500).json({ error: "Erro ao buscar livros" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
