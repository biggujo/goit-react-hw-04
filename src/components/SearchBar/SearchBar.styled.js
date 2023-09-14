import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { BiSearch } from 'react-icons/bi';

export const SearchBarStyled = styled.header`
  position: sticky;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 72px;
  margin-bottom: 20px;

  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const FormStyled = styled(Form)`
  display: flex;
  width: 600px;

  background-color: #ffffff;
  border-radius: 4px;

  overflow: hidden;
`;

export const IconButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 48px;

  border: none;
  background-color: transparent;

  &
`;

export const IconStyled = styled(BiSearch)`
  width: 18px;
  height: 18px;

  opacity: 0.6;
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  height: 40px;

  border: none;
  background-color: transparent;

  outline: none;
`;
