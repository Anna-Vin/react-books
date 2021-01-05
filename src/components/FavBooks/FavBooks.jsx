import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../Books/Books.scss';
import SingleBook from '../Books/Book';


const FavBooks = () => {
  let favBooks = JSON.parse(localStorage.getItem('FavBooks')) || [];
  const [books, setBooks] = useState(favBooks);

  const removeFromLocal = (e, book) => {
    e.stopPropagation();
    favBooks = favBooks.filter(b => b.id !== book.id);
    localStorage.setItem('FavBooks', JSON.stringify(favBooks));
    setBooks(favBooks)
  };

  return (
    <div className="fav">
      <Container>
        <h2>Favourite Books</h2>
        <div className="books__inner">
          {books.map((book, index) => {
            return <SingleBook data={book} key={index} buttonClassName="button2" buttonChildren="Remove" buttonOnClick={(e) => removeFromLocal(e, book)} />
          })}
        </div>
      </Container>
    </div>
  );
}

export default FavBooks;