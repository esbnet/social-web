import { Feed } from '../../components/Feed/Feed';
import { Rightbar } from '../../components/Rightbar/Rightbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Topbar } from '../../components/Topbar/Topbar';
import { Container } from './styles';

interface ProfileProps {
  id: number;
  profilePicture: string;
  username: string;
}


export function Home(profile: ProfileProps) {
  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <Feed />
        <Rightbar {...profile}/>
      </Container>
    </>
  );
};
