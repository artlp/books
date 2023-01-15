import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate.jsx";
import BookList from "./components/BookList.jsx";
import BooksContext from "./context/books.js";

function App() {
  const { fetchBooks, books } = useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  }, []);
  
  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
