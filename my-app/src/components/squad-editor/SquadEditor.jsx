import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './SquadEditor.css';
import Button from '../../common/Button';
import Card from '../../common/Card';

class SquadEditor extends Component {
  static propTypes = {
    addedheroes: PropTypes.instanceOf(Array).isRequired,
    inform: PropTypes.func.isRequired,
    deletehero: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    stats: PropTypes.func.isRequired,
  };

  render() {
    const { addedheroes, inform, stats, deletehero, reset, save } = this.props;

    const squadStats = stats(addedheroes);

    return (
      <div className={style.squad}>
        <h2 className={style.title}>Squad Editor</h2>
        <div>
          <Button submit={() => save()} title="Save Squad" />
          <Button submit={() => reset()} title="Reset Editor" />
        </div>
        <div className={style.container}>
          <span>strength: {squadStats.strength}</span>
          <span>intelligence: {squadStats.intelligence}</span>
          <span>speed: {squadStats.speed}</span>
        </div>
        <div className={style.cardcontainer}>
          {addedheroes.map(item => (
            <Card
              isAdded
              inform={() => inform(item.id)}
              deletehero={() => deletehero(item.id)}
              key={item.id}
              hero={item}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SquadEditor;
