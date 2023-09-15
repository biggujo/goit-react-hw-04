import styled from '@emotion/styled';

export const BackdropStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 920px;
  height: 640px;

  transform: translate(-50%, -50%);

  background-color: #ffffff;
`;
