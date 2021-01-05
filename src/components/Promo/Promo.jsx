import React from 'react';
import './Promo.scss';
import { Container } from 'react-bootstrap';

const Search = (props) => {
  const { getBooks, setSearchVal, setSelectVal } = props;

  return (
    <div className="promo">
      <Container>
        <div className="promo__inner">
          <h1>React Project</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem nulla repellendus eligendi dolorum! Expedita a unde officiis inventore, velit doloremque possimus eos vel aliquam aliquid. Porro sed delectus iusto?</p>
          <div className="sorting">
            <input type="text" placeholder="Enter Book Title"
              onChange={(e) => setSearchVal(e.target.value || '')} />
            <select className="custom-select" onChange={(e) => setSelectVal(e.target.value)}>
              <option value="0">1 page</option>
              <option value="1">2 page</option>
              <option value="2">3 page</option>
              <option value="3">4 page</option>
              <option value="5">5 page</option>
            </select>
            <button className="button" onClick={getBooks}>Find Book</button>
          </div>
        </div>
      </Container>
    </div>
  );
}


export default Search;