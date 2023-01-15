import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";


function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name=""
          id=""
          className="input"
          value={title}
          placeholder="Add a book"
          onChange={handleChange}
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
