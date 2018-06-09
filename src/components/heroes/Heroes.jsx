import React, { Component } from 'react'
import propTypes from 'prop-types'
import style from './Heroes.css'
import Input from '../../common/Input'
import Card from '../../common/Card';


class Heroes extends Component {

    static propTypes = {
        heroes: propTypes.instanceOf(Array).isRequired,
        func: propTypes.func.isRequired,
        deletehero: propTypes.func.isRequired,
        inform: propTypes.func.isRequired,
        addhero: propTypes.func.isRequired,
    }

    render() {
        const { heroes, func, deletehero, inform, addhero } = this.props

        return (
            <div className={ style.heroes }>
                <h2 className={ style.title }>Heroes</h2>
                <Input func={func} />
                {heroes.map(item => <Card addhero={ addhero } inform={ inform } deletehero={ deletehero } key={item.id} heroes={ item } />)}
            </div>
        );
    }
}
  
export default Heroes;