import React from 'react';
import './Header.scss';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header-inner">
          <div className="logo-wrapper">
            <Link to='/' className="logo">
              <img src={require('../../img/logo.png')} alt="" />
              <span>React Project</span>
            </Link>
          </div>
          <div className="logo-wrapper">
            <Link to='/favourite' className="logo">
              <img src={require('../../img/heart.png')} alt="" />
              <span>Favourite Books</span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}


export default Header;