import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://127.0.0.1:3001/books");
    setBooks(response.data);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://127.0.0.1:3001/books/${id}`);
    const updatedBooks = books.filter((book) => id !== book.id);
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://127.0.0.1:3001/books", {
      title: title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put("http://127.0.0.1:3001/books/" + id, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      } else {
        return book;
      }
    });
    setBooks(updatedBooks);
  };

  const valueToShare = {
    deleteBookById,
    books,
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={ valueToShare }>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
