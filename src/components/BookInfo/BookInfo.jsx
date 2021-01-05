import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import './BooksInfo.scss';
import 'react-id-swiper/lib/styles/scss/swiper.scss';
import Swiper from 'react-id-swiper';


const BookInfo = () => {
  let id = useParams().id;
  const [bookInfo, setBookInfo] = useState({});

  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`).then(res => {
      setBookInfo(res.data.volumeInfo)
    })
  }, [id])

  return (
    <div className="book">
      <Container>
        <div className="book__inner">
          <h1>{bookInfo.title}</h1>
          <Swiper {...params} className="swiper">
            <div><img src={bookInfo.imageLinks ? bookInfo.imageLinks.small : null} alt={bookInfo.title} /></div>
            <div><img src={bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : null} alt={bookInfo.title} /></div>
          </Swiper>
          {bookInfo.authors && <p><span>Written by: </span> {bookInfo.authors.join(', ')}</p>}
          {bookInfo.categories && <p><span>Categoties: </span>{bookInfo.categories}</p>}
          {bookInfo.publisher && bookInfo.publishedDate && <p><span>Publisher: </span>{bookInfo.publisher},  <span>date:</span> {bookInfo.publishedDate}
          </p>}
          {bookInfo.language && <p><span>Language:</span> {bookInfo.language}</p>}
          {bookInfo.pageCount && <p><span>Pages:</span> {bookInfo.pageCount}</p>}
          {bookInfo.averageRating && <p><span>Rating: </span>{bookInfo.averageRating}/5</p>}
          {bookInfo.description && <p><span>Description: </span>{bookInfo.description}</p>}
        </div>
      </Container>
    </div>
  );
}

export default BookInfo;