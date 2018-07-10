import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './Heroes.css'
import Card from '../../common/Card';


class Heroes extends Component {

    static propTypes = {
        heroes: PropTypes.instanceOf(Array).isRequired,
        deletehero: PropTypes.func.isRequired,
        inform: PropTypes.func.isRequired,
        addhero: PropTypes.func.isRequired,
    }

    render() {
        const { heroes, deletehero, inform, addhero } = this.props

        return (
            <div className={ style.heroes }>
                <h2 className={ style.title }>Heroes</h2>
                {heroes.map(item => <Card addhero={ () => addhero(item.id) } inform={() => inform(item.id) } deletehero={ () => deletehero(item.id)  } key={item.id} hero={ item } />)}
            </div>
        );
    }
}
  
export default Heroes;