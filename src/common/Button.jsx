import React from 'react';
import propTypes from 'prop-types'
import style from './StyleInputs.css';

const Button = ({ submit }) => (
        <input className={ style.button } onClick={ submit } type="submit" value="Add Hero"/>
    )

Button.propTypes = {
    submit: propTypes.func.isRequired
}

export default Button