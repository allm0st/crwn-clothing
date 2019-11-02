import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 40px;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;

export const ParticlesOverlay = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-position: center;
  background: linear-gradient(
    to top,
    rgba(225, 225, 225, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  background-repeat: no-repeat;
`;
