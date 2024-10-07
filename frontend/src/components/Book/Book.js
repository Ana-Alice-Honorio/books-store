import { useEffect } from "react";
import axios from "axios";

// constante com books e loadings setados diretamente
const Book = ({ setBooks, setLoading }) => {
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        //  Buscando livros do MongoDB (backend)
        const mongoResponse = await axios.get("http://localhost:5000/books");

        // Buscando livros da API do NY Times
        const nytResponse = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
        );

        // Combinando os livros do MongoDB e da API do NY Times
        const combinedBooks = [
          ...nytResponse.data.results.books,
          ...mongoResponse.data,
        ];

        //  Setando os livros combinados no estado
        setBooks(combinedBooks);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [setBooks, setLoading]);

  return null;
};

export default Book;
