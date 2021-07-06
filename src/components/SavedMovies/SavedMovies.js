import React from 'react';
import './SavedMovies.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';
import SectionSeparator from '../SectionSeparator/SectionSeparator';

function SavedMovies(props) {
  return (
    <>
      <AuthHeader />
      <Search />
      <SectionSeparator />
      <Footer />
    </>
  );
}

export default SavedMovies;
