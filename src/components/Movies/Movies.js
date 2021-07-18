import React from 'react';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import Gallery from '../Gallery/Gallery';
import SectionSeparator from '../SectionSeparator/SectionSeparator';

import './Movies.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import { BEATFILM_API } from '../../utils/api';

function Movies(props) {
  const [initialCards, setIitialCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      BEATFILM_API.getAllMovies()
    ]).then(([allMovies]) => {
      setIitialCards(allMovies);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
      <AuthHeader className="theme_light" />
      <Search />
      <SectionSeparator />
      <Gallery cards={initialCards} />
      <Footer />
    </>
  )
}

export default Movies;
