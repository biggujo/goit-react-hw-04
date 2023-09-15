import styled from '@emotion/styled';

export const ImageGalleryItemStyled = styled.article`
  width: 100%;
`;

export const ImageStyled = styled.img`
  height: 260px;

  object-fit: cover;
  border-radius: 3px;

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
