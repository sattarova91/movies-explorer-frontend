import React from 'react';
import './Search.css';
import searchImg from '../../images/search-img.svg';

function Search({ onSearch }) {
  const [allFields, setAllFields] = React.useState({ search: '' });

  function handleSearch() {
    onSearch(allFields.search)
  }

  function handleChange(evt) {
    setAllFields({
      ...allFields,
      [evt.target.id]: evt.target.value
    });
  }

  return (
    <section className="search">
      <div className="search__container">
        <div className="search__bar">
          <img className="search__img" alt="поиск" src={searchImg} />
          <input id="search" className="search__find-input" placeholder="Фильм" value={allFields.search} onChange={handleChange} required></input>
          <button className="button search__find-button" onClick={handleSearch}>Найти</button>
        </div>
        <div className="search__settings">
          <label className="search__switch">
            <input type="checkbox" className="search__checkbox" id="checkbox" />
            <span className="search__slider"></span>
          </label>
          <p className="search__paragraph">Короткометражки</p>
        </div>
      </div>
      <div className="search__container_mobile">
        <div className="search__bar search__bar_mobile">
          <img className="search__img" alt="поиск" src={searchImg} />
          <input className="search__find-input" placeholder="Фильм" required></input>
          <button className="button search__find-button" onClick={handleSearch}>Найти</button>
        </div>
      </div>
      <div className="search__settings_mobile">
        <label className="search__switch">
          <input type="checkbox" className="search__checkbox" id="checkbox" />
          <span className="search__slider"></span>
        </label>
        <p className="search__paragraph">Короткометражки</p>
      </div>
    </section>
  )
}

export default Search;
