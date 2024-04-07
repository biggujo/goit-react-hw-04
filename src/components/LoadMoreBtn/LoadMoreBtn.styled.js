import styled from '@emotion/styled';

export const LoadMoreBtnStyled = styled.button`
  display: block;
  min-width: 150px;
  height: 48px;
  margin-inline: auto;

  color: #ffffff;
  text-transform: uppercase;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: #3f51b5;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  cursor: pointer;

  &:active {
    background-color: #2b3a8d;
  }
`;
