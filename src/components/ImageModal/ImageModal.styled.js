import styled from '@emotion/styled';

export const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.2);

  z-index: 3;
`;

export const ImageModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 920px;
  height: 680px;

  transform: translate(-50%, -50%);

  background-color: transparent;
  border-radius: 3px;

  overflow: hidden;
`;
