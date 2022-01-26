import PropTypes from 'prop-types';
import React from 'react';

import { CardContainer, CardImg } from './styles';

function PokemonCard({ pokemon }) {
  return (
    <CardContainer>
      <a href={`https://www.pokemon.com/us/pokedex/${pokemon.name}`} target="_blank" rel="noreferrer">
        <CardImg alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} />
        <h2>Bulbasaur</h2>
      </a>
    </CardContainer>
  );
}

PokemonCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCard;
