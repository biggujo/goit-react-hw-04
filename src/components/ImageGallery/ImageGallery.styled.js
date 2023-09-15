import styled from '@emotion/styled';

export const ImageGalleryStyled = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-inline: auto;
  margin-bottom: 60px;
  padding: 0;

  list-style: none;
`;

export const ItemStyled = styled.li`
  height: 260px;
`;
