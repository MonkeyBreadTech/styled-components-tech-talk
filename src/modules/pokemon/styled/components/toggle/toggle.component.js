import PropTypes from 'prop-types';
import React from 'react';

import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from './styles';

function Toggle({ onClick }) {
  return (
    <CheckBoxWrapper>
      <CheckBox id="checkbox" type="checkbox" onClick={onClick} />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
}

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Toggle;
