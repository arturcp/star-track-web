import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
  state = {
    characters: [],
  }

  componentDidMount() {
    this.loadCharacters();
  }

  loadCharacters = async () => {
    const response = await api.get('/characters');
    this.setState({ characters: response.data.characters });
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="characters-list">
        {characters.map(character => (
          <article key={character.id}>
            <h2>{character.name}</h2>

            <div className="image-container">
              <img src={character.image_url} />
            </div>
          </article>
        ))}
      </div>
    )
  }
}
