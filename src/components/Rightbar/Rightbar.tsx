import { ReactNode } from 'react';

import { Container } from './styles';

interface RightbarProps {
  children: ReactNode;
}

function Rightbar({ children }: RightbarProps) {
  return (
    <Container>
      <h1>Rightbar</h1>
      {children}
    </Container>
  );
};

export default Rightbar;
