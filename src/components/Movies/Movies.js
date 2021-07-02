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
          <button className="search__button">Найти</button>
          <input></input>
        </div>
        <div className="search__short-film">
          <p className="search__paragraph">Короткометражки</p>
          <label className="search__switch">
            <input type="checkbox" class="search__checkbox" id="checkbox" />
            <span className="search__slider"></span>
          </label>
        </div>
      </section>
      <Footer>
      </Footer>
    </>
  )
}

export default Movies;
