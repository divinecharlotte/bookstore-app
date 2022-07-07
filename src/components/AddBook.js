import React from 'react';

const AddBook = () => (
  <div id="form-container">
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="author" placeholder="Author" />
      <button type="submit" id="add-book">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
