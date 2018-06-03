// /* eslint-disable */

import React from 'react';
import propTypes from 'prop-types'
import style from './StyleInputs.css';



const Card = ({ heroes }) => (
    <div className={ style.card }>
        <h2 className={ style.title }>{ heroes.name }</h2>
    </div>
) 


Card.propTypes = {
    heroes: propTypes.shape().isRequired
}

export default Card