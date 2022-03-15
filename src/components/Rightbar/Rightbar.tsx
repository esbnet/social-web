import { Container } from './styles';

export function Rightbar() {
  return (
    <Container className='rightbar'>
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImage' src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Edmilson Soares</b> e mais <b>3 amigos</b> fazer aniverãrio hoje
          </span>
        </div>
        <img className="rightbarAd" src='/assets/ad.png' alt='' />
        <h4 className="rightbarTitle">Amigos on-line</h4>    
        <ul className='rightbarFriendList'>
        <li className='rightbarFriend'>
            <div className="rightbarProfileImageContainer">
              <img className='rightProfileImage' src="/assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarusername">Edmilson Soares</span>
          </li>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImageContainer">
              <img className='rightProfileImage' src="/assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarusername">Edmilson Soares</span>
          </li>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImageContainer">
              <img className='rightProfileImage' src="/assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarusername">Edmilson Soares</span>
          </li>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImageContainer">
              <img className='rightProfileImage' src="/assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarusername">Edmilson Soares</span>
          </li>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImageContainer">
              <img className='rightProfileImage' src="/assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarusername">Edmilson Soares</span>
          </li>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImageContainer">
              <img className='rightProfileImage' src="/assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarusername">Edmilson Soares</span>
          </li>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImageContainer">
              <img className='rightProfileImage' src="/assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarusername">Edmilson Soares</span>
          </li>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImageContainer">
              <img className='rightProfileImage' src="/assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarusername">Edmilson Soares</span>
          </li>
        </ul>
      </div>
    </Container >
  );
};
