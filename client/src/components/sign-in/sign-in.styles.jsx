import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const SignInTitle = styled.h2`
  margin: 0 0 10px;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    > button:first-child {
      margin-bottom: 10px;
    }
  }
`;
