import { Container } from './styles';

interface UserProps {
  id: number;
  profilePicture: string;
  username: string;
}

const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

export function CloseFriends(user: UserProps) {
  return (
    <Container>

      <li className="sidebarFriendListItem">
        <img className="sidebarFriendImage" src={publicFolder + user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>

    </Container>
  );
};
