import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonElem from '../../elements/ButtonElem.jsx';

const SingleBook = (props) => {
  const { volumeInfo, id } = props.data;
  let { handleClick, buttonClassName, buttonChildren, buttonOnClick } = props;
  let history = useHistory();

  handleClick = (id) => {
    history.push(`/book/${id}`);
  };


  return (
    <div className="book-card" onClick={() => handleClick(id)}>
      {volumeInfo.imageLinks && <img src={volumeInfo.imageLinks.smallThumbnail} alt={volumeInfo.title} />}
      <h3>{volumeInfo.title}</h3>
      {volumeInfo.authors && <p><span>Written by: </span> {volumeInfo.authors.join(', ')}</p>}
      <ButtonElem className={buttonClassName} onClick={buttonOnClick}>{buttonChildren}</ButtonElem>
    </div>
  );

}



export default SingleBook;