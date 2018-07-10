import React from 'react';
import PropTypes from 'prop-types';
import style from './StyleInputs.css';

const Card = ({ hero, deletehero, inform, addhero, isAdded }) => (
  <div className={style.card}>
    <h2 className={style.title}>{hero.name}</h2>
    <div>
      {!isAdded ? (
        <button onClick={addhero} name={hero.name} className={style.plus}>
          &#43;
        </button>
      ) : (
        ''
      )}
      <button onClick={deletehero} name={hero.name} className={style.delete}>
        &#8416;
      </button>
      <button onClick={inform} name={hero.name} className={style.inform}>
        &#8505;
      </button>
    </div>
  </div>
);

Card.propTypes = {
  hero: PropTypes.shape().isRequired,
  deletehero: PropTypes.func.isRequired,
  inform: PropTypes.func.isRequired,
  addhero: PropTypes.func.isRequired,
  isAdded: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  isAdded: false,
  addhero: () => console.log('card'),
};

export default Card;
