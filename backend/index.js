const express = require("express");
const app = express();
app.use(express.json());

let userBooks = [];

app.post("/api/favorites", (req, res) => {
  const { book } = req.body;
  userBooks.push(book);
  res.status(201).send(book);
});

app.get("/api/favorites", (req, res) => {
  res.status(200).send(userBooks);
});

app.listen(3001, () => {
  console.log("Backend rodando na porta 3001");
});
