import { ThreeDots } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';
import propTypes from 'prop-types';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

Loader.propTypes = {
  height: propTypes.number,
  width: propTypes.number,
  radius: propTypes.number,
  color: propTypes.string,
  ariaLabel: propTypes.string,
  wrapperStyle: propTypes.object,
  wrapperClassName: propTypes.string,
  visible: propTypes.bool,
};
