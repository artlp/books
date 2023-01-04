import React from "react";
import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
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
