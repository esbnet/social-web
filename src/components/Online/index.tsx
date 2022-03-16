import { Container } from './styles';

interface UserProps {
  id: number;
  profilePicture: string;
  username: string;
}

const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

export function Online(user: UserProps) {
  return (
    <Container>
      <li className='rightbarFriend'>
        <div className="rightbarProfileImageContainer">
          <img className='rightProfileImage' src={publicFolder + user.profilePicture} alt="" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarusername">{user.username}</span>
      </li>
    </Container>
  );
};


