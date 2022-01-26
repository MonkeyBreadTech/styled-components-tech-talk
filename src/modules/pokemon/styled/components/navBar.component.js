import styled from 'styled-components';

export const NavBar = styled.nav`
  ${({ theme }) => `background-color: ${theme.secondaryColor}`};

  align-items: center;
  box-shadow: 0px 15px 10px -15px #111;
  display: flex;
  height: 64px;
  justify-content: flex-end;
  padding: 0 16px;
`;
