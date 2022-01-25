import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import MuiPokemon from 'modules/pokemon/mui';
import { Pokemon } from 'modules/pokemon/pokemon.container';
import { ROUTES } from 'utilities/routes';
import { StyledPokemon } from 'modules/pokemon/styled';

export function App() {
  return (
    <Routes>
      <Route path={ROUTES.POKEMON} element={<Pokemon />}>
        <Route index element={<MuiPokemon />} />
        <Route path={ROUTES.STYLED} element={<StyledPokemon />} />
        <Route path={ROUTES.MUI} element={<MuiPokemon />} />
      </Route>
      <Route path="*" element={<Navigate to={ROUTES.POKEMON} />} />
    </Routes>
  );
}
