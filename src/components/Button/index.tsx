import React from 'react';

import { Container } from './styles';

const Button: React.FC<JSX.IntrinsicElements['button']> = ({
  children,
  ...rest
}) => {
  return (
    <Container>
      <button {...rest}>{children}</button>{' '}
    </Container>
  );
};

export default Button;
