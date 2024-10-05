import "./App.css";
import React, { useState } from "react";
import Book from "./components/Book/Book";
import Header from "./components/Header/Header";
import BookList from "./components/BookList/BookList";
import NotFound from "./components/NotFound/NotFound";
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";
import AddBook from "./components/BookForm/BookForm";
//importação do necessário

function App() {
  //setando livros e loading
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Função para lidar com mudanças no campo de busca
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };
  // Filtra os livros com base no termo de busca
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //retornando um header, o loading setado ou compon. Loading caso contrário trago os livros usando ternário
  return (
    <div>
      {/* Header com search. Se não voltar o filtro por nome do livro, ele traz a página de notFound */}

      <Header onSearch={handleSearchChange} />
      {/* formulário de adicionar novo livro*/}
      <AddBook setBooks={setBooks} />
      {/* chamada dos dados do endpoint NY times book*/}
      <Book setBooks={setBooks} setLoading={setLoading} />
      {loading ? (
        <Loading />
      ) : filteredBooks.length > 0 ? (
        <BookList books={filteredBooks} />
      ) : (
        <NotFound />
      )}

      <Footer />
    </div>
  );
}

export default App;
