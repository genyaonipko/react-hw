import React, { Component } from 'react'
import propTypes from 'prop-types'
import style from './CreateHero.css'
import Select from '../../common/Select'
import Input from '../../common/Input'
import Button from '../../common/Button'

class CreateHero extends Component {
    static propTypes = {
        func: propTypes.func.isRequired,
        submit: propTypes.func.isRequired,
        valueinput: propTypes.string.isRequired
    }

    render() {
        const abilityArr = ['strength', 'intelligence', 'speed']
        const { func, submit, valueinput } = this.props

        return (
            <div className={ style.create }>
                <h2 className={ style.title }>Create Hero</h2>
                <Input valueinput={ valueinput } func={ func } />
                {abilityArr.map(item => <Select func={ func } key={item} ability={item} />)}
                <Button title='Add Hero' submit={ submit } />
            </div>
        );
    }
}
  
export default CreateHero;