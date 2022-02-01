import PropTypes from 'prop-types';
import React from 'react';
import { Card, CardMedia, styled } from '@mui/material';

const StyledCard = styled(Card)({
  display: 'flex',
  justifyContent: 'center',
});

const StyledCardMedia = styled(CardMedia)({
  width: '160px',
  height: '180px',
});

function PokemonCard({ pokemon }) {
  return (
    <StyledCard>
      <a href={`https://www.pokemon.com/us/pokedex/${pokemon.name}`} target="_blank" rel="noreferrer">
        <StyledCardMedia
          alt="pokemon"
          component="img"
          src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
        />
        <h2>Bulbasaur</h2>
      </a>
    </StyledCard>
  );
}

PokemonCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCard;
