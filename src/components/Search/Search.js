import React from 'react';
import './Search.css';
import { Formik } from 'formik';
import searchImg from '../../images/search-img.svg';

function Search({ onSearch }) {
  return (
    <Formik
      initialValues={{ search: '', isShort: false }}
      validate={(values) => {
        const errors = {};
        if (!values.search) {
          errors.search = 'Обязательное поле';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
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
