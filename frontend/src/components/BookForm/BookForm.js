import React, { useState } from "react";
import axios from "axios";
import "./BookForm.css";

const AddBook = ({ setBooks }) => {
  //setando o título, autor, imagem e descrção
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  //submit dos dados
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = { title, author, imageUrl, description };

    try {
      // Enviar o novo livro para o backend
      const response = await axios.post("http://localhost:5000/books", newBook);

      // Adiciono o novo livro à lista existente
      setBooks((prevBooks) => [...prevBooks, response.data]);

      // Limpo os campos do formulário
      setTitle("");
      setAuthor("");
      setImageUrl("");
      setDescription("");
    } catch (error) {
      console.error("Erro ao adicionar livro:", error);
    }
  };

  /* dados do formulário com seus respectivos estados*/

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="URL da Imagem"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Adicionar Livro</button>
    </form>
  );
};

export default AddBook;
