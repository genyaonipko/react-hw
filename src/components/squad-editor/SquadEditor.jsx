import React, { Component } from 'react'
import propTypes from 'prop-types'
import style from './SquadEditor.css'
import Button from '../../common/Button'
import Card from '../../common/Card'


class SquadEditor extends Component {

    
    static propTypes = {
        squad: propTypes.instanceOf(Array).isRequired,
        inform: propTypes.func.isRequired,
        deletehero: propTypes.func.isRequired,
        strength: propTypes.number.isRequired,
        intelligence: propTypes.number.isRequired,
        speed: propTypes.number.isRequired,
        reset: propTypes.func.isRequired,
        save: propTypes.func.isRequired,
    }

    render() {
        const { squad, inform, deletehero, strength, intelligence, speed, reset, save } = this.props

        return (
            <div className={ style.squad }>
                <h2 className={ style.title }>Squad Editor</h2>
                <div>
                    <Button submit={ save } title='Save Squad'/>
                    <Button submit={ reset } title='Reset Editor'/>
                </div>
                <div className={ style.container }>
                    <span>strength: { strength }</span>
                    <span>intelligence:  { intelligence }</span>
                    <span>speed:  { speed }</span>                    
                </div>
                <div className={ style.cardcontainer }>
                    {squad.map((item) => (<Card isAdded inform={ inform } deletehero={ deletehero } key={item.id} heroes={ item } />))}
                </div>
            </div>
        );
    }
}
  
export default SquadEditor;