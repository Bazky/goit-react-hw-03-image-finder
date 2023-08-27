import React, { useState } from 'react';
import css from '../Searchbar/Searchbar.module.css';
import propTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <div>
      <header className={css.searchbar}>
        <form className={css.searchform} onSubmit={handleSubmit}>
          <button type="submit" className={css.searchform_button}>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/search--v1.png"
              alt="search--v1"
            />
          </button>

          <input
            className={css.searchform_input}
            type="text"
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
        </form>
      </header>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
