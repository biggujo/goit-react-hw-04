import styled from '@emotion/styled';

export const ImageCardStyled = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const ImageStyled = styled.img`
  height: 260px;

  object-fit: cover;
  border-radius: 3px;

  transition: transform 220ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: zoom-in;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ImageModalStyled = styled.img`
  width: 920px;
  height: 680px;

  object-fit: cover;

  cursor: zoom-out;
`;
