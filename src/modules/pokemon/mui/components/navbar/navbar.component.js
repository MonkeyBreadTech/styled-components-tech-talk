import React from 'react';
import { AppBar, FormControlLabel, Switch, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ROUTES } from 'utilities/routes';
import { selectTheme } from 'modules/layout/layout.selectors';
import { toggleTheme } from 'modules/layout/layout.slice';

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'white',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

function Navbar() {
  const dispatch = useDispatch();

  const selectedTheme = useSelector(selectTheme);

  return (
    <AppBar color="secondary">
      <StyledToolbar>
        <StyledLink to={`/${ROUTES.POKEMON}/${ROUTES.STYLED}`}>Styled</StyledLink>
        <FormControlLabel
          control={
            <Switch checked={selectedTheme === 'red'} onChange={() => dispatch(toggleTheme())} color="primary" />
          }
          label=""
        />
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
