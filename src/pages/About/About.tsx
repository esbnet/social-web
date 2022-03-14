import { ReactNode } from 'react';

import { Container } from './styles';

interface AboutProps {
  children: ReactNode;
}

function About({ children }: AboutProps) {
  return (
    <Container>
      <h1>About</h1>
      {children}
    </Container>
  );
};

export default About;
