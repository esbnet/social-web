import { Container } from './styles';

interface UserProps {
  id: number;
  profilePicture: string;
  username: string;
}

export function CloseFriends(user: UserProps) {
  return (
    <Container>

      <li className="sidebarFriendListItem">
        <img className="sidebarFriendImage" src={user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>

    </Container>
  );
};
