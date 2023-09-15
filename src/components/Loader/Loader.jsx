import React from 'react';
import { BounceLoader } from 'react-spinners';
import { Wrapper } from './Loader.styled';

export default function Loader() {
  return <Wrapper>
    <BounceLoader color='#3f51b5' />
  </Wrapper>;
}
