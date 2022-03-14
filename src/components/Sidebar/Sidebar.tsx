import { ReactNode } from 'react';

import { Container } from './styles';

interface SidebarProps {
  children: ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return (
    <Container>
      <h1>Sidebar</h1>
      {children}
    </Container>
  );
};

export default Sidebar;
