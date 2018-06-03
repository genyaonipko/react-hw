import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { v4 } from 'uuid'
import Header from './components/header/Header'
import CreateHero from './components/create-hero/CreateHero';
import Heroes from './components/heroes/Heroes';
import style from './App.css';
import * as api from './utils/api';

class App extends Component {

  constructor() {
    super()
    this.filterArr = []
    this.state = {
      heroes: [],
    };
  }

  
  componentDidMount() {
    this.getHeroes();
  }
  
  getHeroes = () => {
    api.fetchAllCards().then(({ data }) => {
      this.setState({ heroes: data })
    })
  }

  filterHeroes = (e) => {
    if(!e.target.value) {
      this.getHeroes()
    }
    const heroesArr = this.state.heroes
    this.filterArr = heroesArr.filter(item => item.name.toLowerCase().includes((e.target.value).toLowerCase()))
    this.setState({ heroes: this.filterArr })
  }

  createNewHero = (e) => {
    const { target } = e
    const name = target.name

    this.setState({ [name]: target.value })
  }

  addHeroToList = () => {
    const heroObj = {
      id: v4(),
      name: this.state.hero,
      strength: this.state.strength,
      intelligence: this.state.intelligence,
      speed: this.state.speed
    }

    this.setState({ heroes: [...this.state.heroes, heroObj ]})
  }
  
  render() {

    return (
      <div className={ style.wrapper }>
        <Header />
        <div className={ style.container }>
          <CreateHero submit={ this.addHeroToList } func={ this.createNewHero } />
          <Heroes func={this.filterHeroes} heroes={ this.state.heroes } />
        </div>
      </div>
    );
  }
}

export default App;
