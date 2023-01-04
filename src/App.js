import { useState } from "react";
import BookCreate from "./components/BookCreate.jsx";

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    
  };

  return (
    <div className="App">
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
