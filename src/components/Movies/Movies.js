import React from 'react';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';
import Gallery from '../Gallery/Gallery';
import SectionSeparator from '../SectionSeparator/SectionSeparator';

import './Movies.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import filmImg from '../../images/film-img.png';

const initialCards = [
  { src: filmImg,
    title: 'Киноальманах «100 лет дизайна»',
    time: '1ч 17м'
  },
  { src: filmImg,
    title: 'Киноальманах «100 лет дизайна»',
    time: '1ч 17м'
  },
  { src: filmImg,
    title: 'Киноальманах «100 лет дизайна»',
    time: '1ч 17м'
  },
  { src: filmImg,
    title: 'Киноальманах «100 лет дизайна»',
    time: '1ч 17м'
  },
  { src: filmImg,
    title: 'Киноальманах «100 лет дизайна»',
    time: '1ч 17м'
  },
  { src: filmImg,
    title: 'Киноальманах «100 лет дизайна»',
    time: '1ч 17м'
  },
  { src: filmImg,
    title: 'Киноальманах «100 лет дизайна»',
    time: '1ч 17м'
  },
]

function Movies(props) {
  return (
    <>
      <AuthHeader />
      <Search />
      <SectionSeparator />
      <Gallery cards={initialCards} />
      <Footer />
    </>
  )
}

export default Movies;
