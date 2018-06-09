import React from 'react';
import propTypes from 'prop-types'
import style from './StyleInputs.css'

const Input = ({ func, valueinput }) => (
    <input className={ style.input } onChange={ func } value={ valueinput } name="hero" type="text" placeholder="Hero Name"/>
)


Input.propTypes = {
    func: propTypes.func.isRequired,
    valueinput: propTypes.string.isRequired
}

Input.defaultProps = {
    valueinput: ''
}

export default Input