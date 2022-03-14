import { ReactNode } from 'react';

import { Container } from './styles';

interface TimelineProps {
  children: ReactNode;
}

function Timeline({ children }: TimelineProps) {
  return (
    <Container>
      <h1>Timeline</h1>
      {children}
    </Container>
  );
};

export default Timeline;
