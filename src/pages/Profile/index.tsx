import { Feed } from '../../components/Feed/Feed';
import { Rightbar } from '../../components/Rightbar/Rightbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Topbar } from '../../components/Topbar/Topbar';
import { Container } from './styles';

export function Profile() {
  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className='profileCoverImage' src="assets/post/3.jpeg" alt="" />
              <img className='profileUserImage' src="assets/person/7.jpeg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileName">Edmilson Soares</h4>
              <span className="profileInfoDesc">My bio...</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </Container>
    </>
  );
};
