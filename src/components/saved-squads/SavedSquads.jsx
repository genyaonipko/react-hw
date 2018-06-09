import React, { Component } from 'react'
import propTypes from 'prop-types'
import style from './SavedSquads.css'

class SavedSquads extends Component {

    
    static propTypes = {
        savedsquads: propTypes.instanceOf(Array).isRequired,
        deletesquad: propTypes.func.isRequired
    }

    render() {
        const { savedsquads, deletesquad } = this.props

        return (
            <div className={ style.saved }>
                <h2 className={ style.title }>Saved Squads</h2>
                {savedsquads.map((item) => <div key={ item.id } className={ style.container }>
                        <div className={ style.heroes }>
                            {item.heroes.map(hero => <span key={ hero.name }>{hero.name}</span>)}
                        </div>
                        <div className={ style.stats }>
                            <span>strength: { item.stats.str }</span>
                            <span>intelligence: { item.stats.int }</span>
                            <span>intelligence: { item.stats.spd }</span>
                        </div>
                        <button onClick={ deletesquad } name={ item.id }>&#8416;</button>
                    </div>
                )}
            </div>
        );
    }
}
  
export default SavedSquads;