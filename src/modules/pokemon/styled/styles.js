import styled from 'styled-components';

export const PageContainer = styled.div`
  ${({ theme }) => `background-color: ${theme.primaryColor}`};

  height: 100%;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 980px;
`;
