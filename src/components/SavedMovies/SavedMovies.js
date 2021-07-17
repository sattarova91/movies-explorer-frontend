import React from 'react';
import './SavedMovies.css';
import AuthHeader from '../AuthHeader/AuthHeader';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import SectionSeparator from '../SectionSeparator/SectionSeparator';
import filmImg from '../../images/film-img.png';

const initialCards = [
  { src: filmImg,
    title: '33 слова о дизайне',
    time: '1ч 17м',
    saved: true,
  },
  { src: filmImg,
    title: 'Киноальманах «100 лет дизайна»',
    time: '1ч 17м',
    saved: true,
  },
  { src: filmImg,
    title: 'Киноальманах «100 лет дизайна»',
    time: '1ч 17м',
    saved: true,
  },
  { src: filmImg,
    title: 'Киноальманах «100 лет дизайна»',
    time: '1ч 17м',
    saved: true,
  },
  { src: filmImg,
    title: 'Киноальманах «100 лет дизайна»',
    time: '1ч 17м',
    saved: true,
  },
  { src: filmImg,
    title: 'Киноальманах «100 лет дизайна»',
    time: '1ч 17м',
    saved: true,
  },
  { src: filmImg,
    title: 'Киноальманах «100 лет дизайна»',
    time: '1ч 17м',
    saved: true,
  },
]

function SavedMovies(props) {
  return (
    <>
      <AuthHeader className="theme_light" />
      <Search />
      <SectionSeparator />
      <Gallery cards={initialCards} />
      <Footer />
    </>
  );
}

export default SavedMovies;
