import React, { Component } from 'react';

import PokemonCard from './PokemonCard';
import Loading from '../layout/Loading';
import axios from 'axios';

export default class PokemonList extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=151',
    pokemon: null
  };

  async buildList()
  {
    const res = await axios.get(this.state.url);
    let data = await res.data['results'];
    if(this.props.search) {
  
      let dataFilter = data.filter(pokemon => (pokemon.name.includes(this.props.search.toLowerCase())))
      this.setState({pokemon: dataFilter});
    } else {
      this.setState({pokemon: data});

    }
  }

  render() {
    this.buildList();
    return (
      <div>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
