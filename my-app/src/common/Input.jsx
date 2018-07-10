import React from 'react';
import PropTypes from 'prop-types'
import style from './StyleInputs.css'

const Input = ({ onChange, valueinput, name }) =>  
    <input className={ style.input } onChange={(e) => onChange(e) } value={ valueinput } name={name} type="text" placeholder="Hero Name"/>




Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    valueinput: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Input