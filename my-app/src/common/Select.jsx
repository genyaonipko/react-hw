import React from 'react';
import PropTypes from 'prop-types'
import style from './StyleInputs.css';



const Select = ({ ability, func }) => {
    const countAbility = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <select className={ style.select } onChange={ func } name={ ability } defaultValue={ ability }>
            <option value={ ability } disabled>{ ability }</option>
            {countAbility.map(item => <option key={ item } value={ item }>{ item }</option>)}      
        </select>
    ) 
}

Select.propTypes = {
    ability: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired
}

export default Select