import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 10px solid transparent;
  border-radius: 5px;
  padding: 1rem;
  cursor: url(https://emoji.gg/assets/emoji/2355_ultra_ball_pokemon.png), auto;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.8);
  font-family: 'Righteous', cursive;
  margin: 16px 0;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImg = styled.img`
  width: 160px;
  height: 180px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  cursor: url(https://emoji.gg/assets/emoji/2355_ultra_ball_pokemon.png), auto;
`;
