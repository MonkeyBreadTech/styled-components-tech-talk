import React from 'react';

import { useGetAllPokemonQuery } from 'modules/pokemon/pokemon.slice';

function MuiPokemon() {
  const { data, error, isLoading } = useGetAllPokemonQuery();

  console.log('HERE', data, error, isLoading);
  return <div>MUI</div>;
}

export default MuiPokemon;
