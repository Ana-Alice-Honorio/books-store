import React, { useState } from "react";
import axios from "axios";
import "./BookForm.css";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";

const AddBook = ({ setBooks }) => {
  //setando o título, autor, imagem e descrção
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

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
      setOpenDialog(true);
    } catch (error) {
      console.error("Erro ao adicionar livro:", error);

      // Exibe o Snackbar de erro
      setSnackbarMessage("Erro ao adicionar o livro. Tente novamente.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  /* dados do formulário com seus respectivos estados*/

  return (
    <>
      <form onSubmit={handleSubmit} className="book-form">
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

      {/* Modal de sucesso */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Livro adicionado com sucesso!</DialogTitle>
        <DialogActions>
          <button onClick={handleCloseDialog}>OK</button>
        </DialogActions>
      </Dialog>

      {/* Snackbar de erro */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddBook;
