import React from 'react';

import { Container } from './styles';

type InputProps = JSX.IntrinsicElements['input'];

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
};

export default Input;
