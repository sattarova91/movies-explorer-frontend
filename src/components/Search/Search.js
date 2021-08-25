import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import './Search.css';
import { Formik } from 'formik';
import searchImg from '../../images/search-img.svg';

function Search({ onSearch }) {
  const location = useLocation();
  const history = useHistory();

  function setSearchURL(searchStr, isShort) {
    history.push({
      search: `?searchStr=${searchStr}&isShort=${isShort}`
    })
  }
  function getSearchURL() {
    const params = new URLSearchParams(location.search);
    const searchStr = params.get('searchStr');
    return {
      searchStr: searchStr ? searchStr : '',
      isShort: params.get('isShort') === 'true',
    }
  }

  const {searchStr: prevSearchStr, isShort: prevIsShort} = getSearchURL();

  React.useEffect(() => {
    if (prevSearchStr || prevIsShort) {
      // восстанавливаем предыдущий поиск при загруки компонента
      onSearch(prevSearchStr, prevIsShort);
    }
  }, []);

  return (
    <Formik
      initialValues={{ search: prevSearchStr, isShort: prevIsShort }}
      validate={(values) => {
        const errors = {};
        if (!values.search) {
          errors.search = 'Обязательное поле';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSearchURL(values.search, values.isShort);
        onSearch(values.search, values.isShort);
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form className="search__form">
          <section className="search">
            <div className="search__container">
              <div className="search__bar">
                <img className="search__img" alt="поиск" src={searchImg} />
                <input
                  className="search__find-input"
                  type="text"
                  name="search"
                  required
                  placeholder={errors.search || 'Фильм'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.search}
                />
                <button className="button search__find-button" onClick={handleSubmit} type="submit">Найти</button>
              </div>
              <div className="search__settings">
                <label className="search__switch">
                  <input
                    className="search__checkbox"
                    type="checkbox"
                    name="isShort"
                    onChange={handleChange}
                    checked={values.isShort}
                  />
                  <span className="search__slider" />
                </label>
                <p className="search__paragraph">Короткометражки</p>
              </div>
            </div>
            <div className="search__container_mobile">
              <div className="search__bar search__bar_mobile">
                <img className="search__img" alt="поиск" src={searchImg} />
                <input
                  className="search__find-input"
                  type="text"
                  name="search"
                  required
                  placeholder={errors.search || 'Фильм'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.search}
                />
                <button className="button search__find-button" type="button" onClick={handleSubmit}>Найти</button>
              </div>
            </div>
            <div className="search__settings_mobile">
              <label className="search__switch">
                <input
                  className="search__checkbox"
                  type="checkbox"
                  name="isShort"
                  onChange={handleChange}
                  checked={values.isShort}
                />
                <span className="search__slider" />
              </label>
              <p className="search__paragraph">Короткометражки</p>
            </div>
          </section>
        </form>
      )}
    </Formik>

  );
}

export default Search;
