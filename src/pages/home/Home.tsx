import { Feed } from '../../components/Feed/Feed';
import { Rightbar } from '../../components/Rightbar/Rightbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Topbar } from '../../components/Topbar/Topbar';
import { Container } from './styles';


export function Home() {
  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Container>
    </>
  );
};
