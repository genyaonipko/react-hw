import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './CreateHero.css';
import Select from '../../common/Select';
import Input from '../../common/Input';
import Button from '../../common/Button';

const INITIAL_STATE = {
  name: '',
  strength: 1,
  intelligence: 1,
  speed: 1,
};

class CreateHero extends Component {
  static propTypes = {
    submit: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  handleInputChange = ({ target }) => {
    const { name, value } = target;

    if (name === 'name') {
      return this.setState({ [name]: value });
    }

    return this.setState({ [name]: +value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.submit({ ...this.state });

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const abilityArr = ['strength', 'intelligence', 'speed'];

    const { name } = this.state;

    return (
      <form className={style.create} onSubmit={this.handleSubmit}>
        <h2 className={style.title}>Create Hero</h2>
        <Input
          name="name"
          valueinput={name}
          onChange={this.handleInputChange}
        />
        {abilityArr.map(item => (
          <Select func={this.handleInputChange} key={item} ability={item} />
        ))}
        <Button title="Add Hero" />
      </form>
    );
  }
}

export default CreateHero;
