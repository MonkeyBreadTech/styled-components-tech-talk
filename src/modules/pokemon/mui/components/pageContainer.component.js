import PropTypes from 'prop-types';
import React from 'react';
import { Box, useTheme } from '@mui/material';

function PageContainer({ children }) {
  const theme = useTheme();

  return (
    <Box backgroundColor={theme.palette.primary.main} height="100%" marginTop="80px">
      {children}
    </Box>
  );
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
