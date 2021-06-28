import React from 'react';
import Footer from '../Footer/Footer';
import './Movies.css';
import searchImg from '../../images/search-img.svg';
import AuthHeader from '../AuthHeader/AuthHeader';

function Movies(props) {
  return (
    <>
      <AuthHeader />
      <section className="search">
        <div className="search__container">
          <img className="search__img" alt="поиск" src={searchImg} />
          <input></input>
          <button className="search__button">Найти</button>
          <div className="search__checkbox">
            <p className="search__paragraph">Короткометражки</p>
          </div>
        </div>
      </section>
      <Footer>
      </Footer>
    </>
  )
}

export default Movies;
