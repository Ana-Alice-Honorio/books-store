import "./App.css";
import React from "react";
import BooksList from "./components/BookList";

function App() {
  return (
    <div>
      <h1>Meu Catálogo de Livros</h1>
      <BooksList />
    </div>
  );
}

export default App;
