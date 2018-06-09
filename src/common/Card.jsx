import React from 'react';
import propTypes from 'prop-types'
import style from './StyleInputs.css';



const Card = ({ heroes, deletehero, inform, addhero, isAdded }) => (
    <div className={ style.card }>
        <h2 className={ style.title }>{ heroes.name }</h2>
        <div>
            {!isAdded ? <button onClick={ addhero } name={ heroes.name } className={ style.plus }>&#43;</button> : ''}
            <button onClick={ deletehero } name={ heroes.name } className={ style.delete }>&#8416;</button>
            <button onClick={ inform } name={ heroes.name } className={ style.inform }>&#8505;</button>
        </div>
    </div>
) 


Card.propTypes = {
    heroes: propTypes.shape().isRequired,
    deletehero: propTypes.func.isRequired,
    inform: propTypes.func.isRequired,
    addhero: propTypes.func.isRequired,
    isAdded: propTypes.bool.isRequired
}

Card.defaultProps = {
    isAdded: false,
    addhero: () => console.log('card')
}

export default Card