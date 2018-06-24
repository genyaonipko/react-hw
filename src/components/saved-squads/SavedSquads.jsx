import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './SavedSquads.css';

class SavedSquads extends Component {
  static propTypes = {
    savedsquads: PropTypes.instanceOf(Array).isRequired,
    deletesquad: PropTypes.func.isRequired,
  };

  render() {
    const { savedsquads, deletesquad } = this.props;
    return (
      <div className={style.saved}>
        <h2 className={style.title}>Saved Squads</h2>
        {savedsquads.map(item => (
          <div key={item.id} className={style.container}>
            <div className={style.heroes}>
              {item.heroes.map(hero => (
                <span key={hero.name}>{hero.name}</span>
              ))}
            </div>
            <div className={style.stats}>
              <span>strength: {item.stats.strength}</span>
              <span>intelligence: {item.stats.intelligence}</span>
              <span>intelligence: {item.stats.speed}</span>
            </div>
            <button onClick={() => deletesquad(item.id)}>&#8416;</button>
          </div>
        ))}
      </div>
    );
  }
}

export default SavedSquads;
