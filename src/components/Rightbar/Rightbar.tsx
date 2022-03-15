import { Container } from './styles';

import { Users } from '../../dummyData';
import { Online } from '../Online';

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

          {Users.map((user, index) => (
            <Online key={index} {...user} />
          ))}

        </ul>
      </div>
    </Container >
  );
};
