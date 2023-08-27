import css from '../Button/Button.module.css';
import propTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <div className={css.button_container}>
      <button
        id="button"
        type="button"
        className={css.button}
        onClick={onClick}
      >
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
