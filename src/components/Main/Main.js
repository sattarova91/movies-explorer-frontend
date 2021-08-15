import React from 'react';
import './Main.css';
import LandingHeader from '../LandingHeader/LandingHeader';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import About from '../About/About';
import Student from '../Student/Student';
import Tech from '../Tech/Tech';

function Main({ loggedIn }) {
  return (
    <>
      <LandingHeader loggedIn={loggedIn} />
      <Landing />
      <About />
      <Tech />
      <Student />
      <Footer />
    </>
  );
}

export default Main;
