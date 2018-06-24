import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  getAvailableHeroes,
  getSquadHeroes,
  getSquadStats,
} from './utils/selectors';
import Header from './components/header/Header';
import CreateHero from './components/create-hero/CreateHero';
import Heroes from './components/heroes/Heroes';
import SquadEditor from './components/squad-editor/SquadEditor';
import SavedSquads from './components/saved-squads/SavedSquads';
import Input from './common/Input';
import style from './App.css';
import * as api from './utils/api';

class App extends Component {
  state = {
    heroes: [],
    squads: [],
    squadEditorIds: [],
    filter: '',
  };

  componentDidMount() {
    this.getInitialData();
  }

  getInitialData = () => {
    const heroesP = api.fetchAllCards();
    const squadsP = api.fetchAllSquads();

    Promise.all([heroesP, squadsP]).then(([heroesRes, squadsRes]) =>
      this.setState({ heroes: heroesRes.data, squads: squadsRes.data }),
    );
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  addHeroToList = hero => {
    api.addHero(hero).then(response => {
      this.setState(prevState => ({
        heroes: [...prevState.heroes, response.data],
      }));
    });
  };

  deleteHero = id => {
    api.deleteHero(id).then(() => {
      this.setState(prevState => ({
        heroes: prevState.heroes.filter(item => item.id !== id),
      }));
    });
  };

  deleteHeroFromSquad = id => {
    this.setState(prevState => ({
      squadEditorIds: prevState.squadEditorIds.filter(item => item !== id),
    }));
  };

  informAboutHero = id => {
    const currentHero = this.state.heroes.find(item => item.id === id);

    alert(
      `name: ${currentHero.name}, strength: ${
        currentHero.strength
      }, intelligence: ${currentHero.intelligence}, speed: ${
        currentHero.speed
      }`,
    );
  };

  addHeroToSquad = id => {
    this.setState(prevState => ({
      squadEditorIds: [...prevState.squadEditorIds, id],
    }));
  };

  addToSquadList = () => {
    const { heroes, squadEditorIds } = this.state;

    const squadHeroes = getSquadHeroes(heroes, squadEditorIds);
    const stats = getSquadStats(squadHeroes);

    const objSquad = {
      heroes: squadHeroes,
      stats,
    };
    api.addToSquad(objSquad).then(response => {
      this.setState(prevState => ({
        squads: [...prevState.squads, response.data],
      }));
    });
  };

  deleteSquad = id => {
    api.deleteSquad(id).then(() => {
      this.setState(prevState => ({
        squads: prevState.squads.filter(item => item.id !== id),
      }));
    });
  };

  resetSquad = () => {
    this.setState({
      squadEditorIds: [],
    });
  };

  render() {
    const { heroes, filter, squads, squadEditorIds } = this.state;
    const availableHeroes = getAvailableHeroes(heroes, filter);
    const editorHeroes = getSquadHeroes(heroes, squadEditorIds);

    return (
      <div className={style.wrapper}>
        <Header />
        <div className={style.container}>
          <CreateHero submit={this.addHeroToList} />
          <div className={style.heroes}>
            <Input
              name="privet"
              valueinput={filter}
              onChange={this.handleFilterChange}
            />
            <Heroes
              addhero={this.addHeroToSquad}
              inform={this.informAboutHero}
              deletehero={this.deleteHero}
              heroes={availableHeroes}
            />
          </div>
          <SquadEditor
            save={this.addToSquadList}
            reset={this.resetSquad}
            stats={getSquadStats}
            inform={this.informAboutHero}
            deletehero={this.deleteHeroFromSquad}
            addedheroes={editorHeroes}
          />
          <SavedSquads deletesquad={this.deleteSquad} savedsquads={squads} />
        </div>
      </div>
    );
  }
}

export default App;
