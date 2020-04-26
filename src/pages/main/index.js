import React, { Component } from 'react';
import { Link } from "react-router-dom";
import api from '../../services/api';
import './styles.css';

import Baraja from 'baraja-js';
import 'baraja-js/dist/baraja.css';

// const baraja = new Baraja(container, options);

export default class Main extends Component {
  state = {
    characters: [],
  }

  componentDidMount() {
    this.loadCharacters();
  }

  loadCards = () => {
    let container = document.querySelector('.baraja-container'),
        options = {};

    const baraja = new Baraja(container);
    this.fanRight(baraja);
  };

  loadCharacters = async () => {
    const response = await api.get('/characters');
    this.setState({ characters: response.data.characters });
    this.loadCards();
  };

  fanRight = (baraja) => {
    baraja.fan({
      direction: 'right',
      easing: 'ease-out',
      origin: { x : 25, y : 100 },
      speed: 500,
      range: 90,
      center: true
    });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="baraja-cards">
        <ul className="baraja-container">
          {characters.map(character => (
            <li key={character.id}>
              <img src={character.image_url} alt={character.name}/>
              <h4>{character.name}</h4>

              <p>{character.biography}</p>
            </li>
          ))}
        </ul>

        <Link to="/about">Sobre</Link>
      </div>
    )
  }
}
