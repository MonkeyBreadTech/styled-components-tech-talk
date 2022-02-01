import React from 'react';
import { Box, Grid, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';

import Navbar from 'modules/pokemon/mui/components/navbar/navbar.component';
import PageContainer from 'modules/pokemon/mui/components/pageContainer.component';
import PokemonCard from 'modules/pokemon/mui/components/pokemonCard/pokemonCard.component';
import { blueTheme, redTheme } from 'utilities/muiThemes';
import { selectTheme } from 'modules/layout/layout.selectors';
import { useGetAllPokemonQuery } from 'modules/pokemon/pokemon.slice';

function MuiPokemon() {
  const selectedTheme = useSelector(selectTheme);

  const { data, isLoading } = useGetAllPokemonQuery();

  return (
    <ThemeProvider theme={selectedTheme === 'red' ? redTheme : blueTheme}>
      <Navbar />
      <PageContainer>
        <Box margin="0 auto" maxWidth="980px">
          <Grid container justifyContent="space-around" spacing={2}>
            {!isLoading &&
              data &&
              data.results.map(pokemon => (
                <Grid item sm={3}>
                  <PokemonCard pokemon={pokemon} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </PageContainer>
    </ThemeProvider>
  );
}

export default MuiPokemon;
