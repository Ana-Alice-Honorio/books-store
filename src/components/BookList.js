import React, { useState, useEffect } from "react";

const BooksList = () => {
  //estados iniciais de livros, loading e erros
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // constante com a api e a chave criada no site 'api NY' e armazenada no .env
  const NYT_API_URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`;

  // chamada get deste endpoint
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(NYT_API_URL);
        if (!response.ok) {
          throw new Error("Falha ao buscar os dados");
        }
        const data = await response.json();
        console.log(data);

        if (data.results && data.results.books) {
          setBooks(data.results.books);
        }
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar os livros: ", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, [NYT_API_URL]);

  // loading para carregamento dos dados
  if (loading) {
    return <p>Carregando livros...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  if (books.length === 0) {
    return <p>Nenhum livro encontrado.</p>;
  }

  //retorno com os campos de título, imagem. autor
  return (
    <div>
      <h2>Lista de Livros - NY Times Bestsellers</h2>
      <ul>
        {books.map((book) => (
          <li key={book.primary_isbn13}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <img src={book.book_image} alt={book.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
