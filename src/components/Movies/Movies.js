import React from 'react';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import Preloader from '../Preloader/Preloader';
import SectionSeparator from '../SectionSeparator/SectionSeparator';
import FilmCard from '../FilmCard/FilmCard';

import './Movies.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import filmImg from '../../images/film-img.png';

const initialCards = [
  { src: filmImg,
    title: 'Киноальманах «100 лет дизайна»',
    time: '1ч 17м'
  }
]

function Movies(props) {
  return (
    <>
      <AuthHeader />
      <Search />
      <SectionSeparator />
      <section className="gallery">
        <FilmCard card={initialCards[0]} />
        <FilmCard card={initialCards[0]} />
        <FilmCard card={initialCards[0]} />
        <FilmCard card={initialCards[0]} />
        <FilmCard card={initialCards[0]} />
      </section>
      <Preloader />
      <Footer>
      </Footer>
    </>
  )
}

export default Movies;
