import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Search from '../Promo/Promo.jsx';
import SingleBook from './Book.jsx';
import './Books.scss';
import BookService from '../../services/bookServise';

const bookService = new BookService();
let favBooks = JSON.parse(localStorage.getItem('FavBooks')) || [];

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [selectVal, setSelectVal] = useState('');
  const [isLoading, setLoading] = useState(false);

  let toLocal = (e, book) => {
    e.stopPropagation();
    if (!favBooks.find(b => b.id === book.id)) {
      favBooks.push(book);
      localStorage.setItem('FavBooks', JSON.stringify(favBooks));
    }
  };

  const getBooks = () => {
    setLoading(true);
    bookService.getBooksByName(`${searchVal || 'Book'}`, selectVal)
      .then(res => {
        setBooks(res.data.items || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    if (!isLoading) {
      getBooks();
    }
    // eslint-disable-next-line
  }, [books, selectVal]);

  return (
    <div>
      <Search
        getBooks={getBooks}
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        selectVal={selectVal}
        setSelectVal={val => setSelectVal(val)} />
      <div className="books">
        <h1>Books</h1>
        <Container>
          <div className="books__inner">
            {books.length ? [...books].map((book, index) => {
              return <SingleBook key={index}
                data={book}
                buttonClassName="button2"
                buttonChildren="Add to Favourites"
                buttonOnClick={(e) => toLocal(e, book)} />;
            }) : null}
            {isLoading ? <h1>Loading...</h1> : ''}
            {!isLoading && !books.length ? <h1>Not found</h1> : ''}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Books;