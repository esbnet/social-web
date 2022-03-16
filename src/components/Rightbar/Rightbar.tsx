import { Container } from './styles';

import { Users } from '../../dummyData';
import { Online } from '../Online';

interface ProfileProps {
  id: number;
  profilePicture: string;
  username: string;
}

const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

export function Rightbar(profile: ProfileProps) {

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImage' src={publicFolder + "gift.png"} alt="" />
          <span className="birthdayText">
            <b>Edmilson Soares</b> e mais <b>3 amigos</b> fazer aniverãrio hoje
          </span>
        </div>
        <img className="rightbarAd" src={publicFolder + "ad.png"} alt='' />
        <h4 className="rightbarTitle">Amigos on-line</h4>
        <ul className='rightbarFriendList'>

          {Users.map((user, index) => (
            <Online key={index} {...user} />
          ))}

        </ul>

      </>
    );
  }

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Informações do usuário</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Cidade: </span>
            <span className="rightbarInfoValue">Salvador</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Naturalidade: </span>
            <span className="rightbarInfoValue">Ubiratã</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relacionamento: </span>
            <span className="rightbarInfoValue">Solteiro</span>
          </div>
        </div>

        <h4 className="rightbarTitle">Amigos</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={publicFolder + 'peron/1.jpeg'} className="rightbarFollowingImage" alt='' />
            <span className="rightbarFollowingName">John Fruisciante</span>
          </div>
          <div className="rightbarFollowing">
            <img src={publicFolder + 'peron/2.jpeg'} className="rightbarFollowingImage" alt='' />
            <span className="rightbarFollowingName">John Fruisciante</span>
          </div>
          <div className="rightbarFollowing">
            <img src={publicFolder + 'peron/3.jpeg'} className="rightbarFollowingImage" alt='' />
            <span className="rightbarFollowingName">John Fruisciante</span>
          </div>
          <div className="rightbarFollowing">
            <img src={publicFolder + 'peron/4.jpeg'} className="rightbarFollowingImage" alt='' />
            <span className="rightbarFollowingName">John Fruisciante</span>
          </div>
          <div className="rightbarFollowing">
            <img src={publicFolder + 'peron/5.jpeg'} className="rightbarFollowingImage" alt='' />
            <span className="rightbarFollowingName">John Fruisciante</span>
          </div>
          <div className="rightbarFollowing">
            <img src={publicFolder + 'peron/6.jpeg'} className="rightbarFollowingImage" alt='' />
            <span className="rightbarFollowingName">John Fruisciante</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <Container className='rightbar'>
      <div className="rightBarWrapper">

        {profile ? HomeRightBar() : ProfileRightBar()}

      </div>
    </Container >
  );
};
