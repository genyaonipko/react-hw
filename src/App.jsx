import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { v4 } from 'uuid'
import Header from './components/header/Header'
import CreateHero from './components/create-hero/CreateHero';
import Heroes from './components/heroes/Heroes';
import SquadEditor from './components/squad-editor/SquadEditor';
import SavedSquads from './components/saved-squads/SavedSquads';
import style from './App.css';
import * as api from './utils/api';

class App extends Component {

  constructor() {
    super()
    this.filterArr = []
    this.arrAfter = []
    this.addSquad = []
    this.removeHeroesToSquad = []
    this.strengthHero = []
    this.intelligenceHero = []
    this.speedHero = []
    this.state = {
      heroes: [],
      squad: [],
      isAdded: false,
      strengthSquad: 0,
      intelligenceSquad: 0,
      speedSquad: 0,
      savedSquads: []
    };
  }

  
  componentDidMount() {
    this.getHeroes();
    this.getSquads()    
  }
  
  getHeroes = () => {
    api.fetchAllCards().then(({ data }) => {
      this.setState({ heroes: data })
    })
  }

  getSquads = () => {
    api.fetchAllSquads().then(({ data }) => {
      this.setState({ savedSquads: data })
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
    const value = target.value
    const currentValue = name === 'hero' ? value : parseInt(value, 10)

    this.setState({ [name]: currentValue })
  }

  addHeroToList = () => {
    const unique = this.state.heroes.find(item => this.state.hero === item.name)
    const { strength, intelligence, speed } = this.state

    if(!unique && (typeof (strength && intelligence && speed) === 'number')) {
      const heroObj = {
        id: v4(),
        name: this.state.hero,
        strength: this.state.strength,
        intelligence: this.state.intelligence,
        speed: this.state.speed
      }
  
      api.addCardHero(heroObj).then(response => {
        if(response.status === 201) {
          this.getHeroes()
        }
      })
    } else {
      alert('Enter unique information!!!')
    }

    
  }

  deleteHero = (e) => {
    const { target } = e
    
    this.arrAfter = this.state.heroes.find(item => item.name === target.name)
    
    api.deleteCardHero(this.arrAfter.id).then(response => {
      if(response.status === 200) {
        this.getHeroes()
      }
    })
  }

  deleteHeroFromSquad = (e) => {
    const { target } = e
    
    const currentHero = this.state.heroes.find(item => item.name === target.name)

    this.addSquad.pop(currentHero)
    this.setState({ squad: this.addSquad })

    this.resetSquad()
  }

  informAboutHero = (e) => {
    const { target } = e
    
    const currentHero = this.state.heroes.find(item => item.name === target.name)
    
    alert(`strength: ${currentHero.strength}, intelligence: ${currentHero.intelligence}, speed: ${currentHero.speed}`)
  }

  informAboutSquadHero = (e) => {
    const { target } = e
    
    const currentHero = this.state.squad.find(item => item.name === target.name)
    
    alert(`strength: ${currentHero.strength}, intelligence: ${currentHero.intelligence}, speed: ${currentHero.speed}`)
  }

  addHeroToSquad = (e) => {
    const { target } = e

    const currentHero = this.state.heroes.find(item => item.name === target.name)

    this.addSquad.push(currentHero)
    this.setState({ squad: this.addSquad })

    this.removeHeroesToSquad = this.state.heroes.filter(item => item.name !== target.name)
    this.setState({ heroes: this.removeHeroesToSquad }) 
    
    this.strengthHero = [...this.strengthHero, currentHero.strength]
    this.intelligenceHero = [...this.intelligenceHero, currentHero.intelligence]
    this.speedHero = [...this.speedHero, currentHero.speed]

    this.addedSquadStats()

  }  


  addedSquadStats = () => {
    this.setState({
      strengthSquad: this.strengthHero.reduce((previousValue, currentValue) => previousValue + currentValue, 0),
      intelligenceSquad: this.intelligenceHero.reduce((previousValue, currentValue) => previousValue + currentValue, 0),
      speedSquad: this.speedHero.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    }) 
  }

  resetSquad = () => {
    this.setState({
      squad: [],
      strengthSquad: 0,
      intelligenceSquad: 0,
      speedSquad: 0,
    })
    this.getHeroes()
    this.addSquad = []
    this.strengthHero = []
    this.intelligenceHero = []
    this.speedHero = []
  }

  addToSquadList = () => {
    const objSquad = {
      heroes: this.state.squad,
      stats: {
        "str": this.state.strengthSquad,
        "int": this.state.intelligenceSquad,
        "spd": this.state.speedSquad,
      },
      id: v4()
    }
    api.addToSquad(objSquad).then(response => {
      if(response.status === 201) {
        this.getSquads()
      }
    })

    this.resetSquad()
    this.addSquad = []
    this.strengthHero = []
    this.intelligenceHero = []
    this.speedHero = []
  }

  deleteSquad = (e) => {
    const { target } = e
    
    const deleteSq = this.state.savedSquads.find(item => item.id === target.name)

    console.log(target.name)

    api.deleteSquad(deleteSq.id).then(response => {
      if(response.status === 200) {
        this.getSquads()
      }
    })
  }

  render() {

    return (
      <div className={ style.wrapper }>
        <Header />
        <div className={ style.container }>
          <CreateHero valueinput={this.state.hero || ''} submit={ this.addHeroToList } func={ this.createNewHero } />
          <Heroes addhero={ this.addHeroToSquad } inform={ this.informAboutHero } deletehero={ this.deleteHero } func={this.filterHeroes} heroes={ this.state.heroes } />
          <SquadEditor save={ this.addToSquadList } reset={ this.resetSquad } strength={ this.state.strengthSquad } intelligence={ this.state.intelligenceSquad } speed={ this.state.speedSquad } addedheroes={ this.state.addedHeroes } inform={ this.informAboutSquadHero } deletehero={ this.deleteHeroFromSquad } squad={ this.state.squad } />
          <SavedSquads deletesquad={ this.deleteSquad } savedsquads={ this.state.savedSquads } />
        </div>
      </div>
    );
  }
}

export default App;
