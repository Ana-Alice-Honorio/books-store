import "./App.css";
import React, { useState } from "react";
import BooksList from "./components/BookList";
import Book from "./components/Book";
import Loading from "./components/Loading";
import Header from "./components/Header";
//importação do necessário

function App() {
  //setando livros e loading
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  //retornando um header, o loading setado ou compon. Loading caso contrário trago os livros usando ternário
  return (
    <div>
      <Header />
      {loading ? <Loading /> : <BooksList books={books} />}
      <Book setBooks={setBooks} setLoading={setLoading} />
    </div>
  );
}

export default App;
