import { useEffect } from "react";
import axios from "axios";

//constante com books e loadings setados diretamente
const Book = ({ setBooks, setLoading }) => {
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        // chamada api ny books
        const response = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
        );
        setBooks(response.data.results.books);
      } catch (error) {
        console.error("Erro na busca por livros:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [setBooks, setLoading]);
  return null;
};

export default Book;
