import React from 'react';
import PropTypes from 'prop-types';
import style from './StyleInputs.css';

const Button = ({ submit, title }) => (
  <input
    className={style.button}
    onClick={submit}
    type="submit"
    value={title}
  />
);

Button.propTypes = {
  submit: PropTypes.func,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  submit: () => console.log('submit'),
};

export default Button;
