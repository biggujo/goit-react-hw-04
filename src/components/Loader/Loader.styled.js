import styled from '@emotion/styled';

export const BackdropStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.35);
`;

export const ModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`;
