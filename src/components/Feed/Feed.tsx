import { ReactNode } from 'react';

import { Container } from './styles';

interface FeedProps {
  children: ReactNode;
}

function Feed({ children }: FeedProps) {
  return (
    <Container>
      <h1>Feed</h1>
      {children}
    </Container>
  );
};

export default Feed;
