import React from 'react';
import propTypes from 'prop-types'
import style from './StyleInputs.css'

const Input = ({ func }) => (
    <input className={ style.input } onChange={ func } name="hero" type="text" placeholder="Hero Name"/>
)


Input.propTypes = {
    func: propTypes.func.isRequired
}

export default Input