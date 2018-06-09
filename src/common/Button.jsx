import React from 'react';
import propTypes from 'prop-types'
import style from './StyleInputs.css';

const Button = ({ submit, title }) => (
        <input className={ style.button } onClick={ submit } type="submit" value={ title }/>
    )

Button.propTypes = {
    submit: propTypes.func.isRequired,
    title: propTypes.string.isRequired
}

export default Button