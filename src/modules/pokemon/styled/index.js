import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import PokemonCard from 'modules/pokemon/styled/components/pokemonCard/pokemonCard.component';
import Toggle from 'modules/pokemon/styled/components/toggle/toggle.component';
import { ContentWrapper, PageContainer } from 'modules/pokemon/styled/styles';
import { NavBar } from 'modules/pokemon/styled/components/navBar.component';
import { blueTheme, redTheme } from 'utilities/styledThemes';
import { selectTheme } from 'modules/layout/layout.selectors';
import { toggleTheme } from 'modules/layout/layout.slice';
import { useGetAllPokemonQuery } from 'modules/pokemon/pokemon.slice';

export function StyledPokemon() {
  const dispatch = useDispatch();

  const theme = useSelector(selectTheme);

  const { data, isLoading } = useGetAllPokemonQuery();

  return (
    <ThemeProvider theme={theme === 'red' ? redTheme : blueTheme}>
      <PageContainer shouldShowProp>
        <NavBar>
          <Toggle onClick={() => dispatch(toggleTheme())} />
        </NavBar>
        <ContentWrapper>
          {!isLoading && data && data.results.map(pokemon => <PokemonCard pokemon={pokemon} />)}
        </ContentWrapper>
      </PageContainer>
    </ThemeProvider>
  );
}
