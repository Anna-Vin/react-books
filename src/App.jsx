import React from 'react';
import './App.scss';
import Header from './components/Header/Header.jsx';
import Books from './components/Books/Books.jsx';
import BookInfo from './components/BookInfo/BookInfo.jsx';
import FavBooks from './components/FavBooks/FavBooks.jsx';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/books" />
        </Route>
        <Route path="/books" component={Books} />
        <Route path="/book/:id" component={BookInfo} />
        <Route path="/favourite" component={FavBooks} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
