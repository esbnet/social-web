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

const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

export function Profile(profile: ProfileProps) {

  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className='profileCoverImage' src={publicFolder + "post/3.jpeg"} alt="" />
              <img className='profileUserImage' src={publicFolder + "person/7.jpeg"} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{profile.profilePicture}</h4>
              <span className="profileInfoDesc">My bio...</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar {...profile} />
          </div>
        </div>
      </Container>
    </>
  );
};
