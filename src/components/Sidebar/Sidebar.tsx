import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from '@material-ui/icons';
import { Container } from './styles';

export function Sidebar() {
  return (
    <Container className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon' />
            <span className="sidebarListItemText">Notícias</span>
          </li>
          <li className="sidebarListItem">
            <Chat className='sidebarIcon' />
            <span className="sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className='sidebarIcon' />
            <span className="sidebarListItemText">Vídeos</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarIcon' />
            <span className="sidebarListItemText">Grupos</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon' />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon' />
            <span className="sidebarListItemText">Ajuda</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon' />
            <span className="sidebarListItemText">Trabalhos</span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarIcon' />
            <span className="sidebarListItemText">Eventos</span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarIcon' />
            <span className="sidebarListItemText">Cursos</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show more ...</button>
        <hr className='sidebarSeparator' />
        <ul className="sidebarFriendList">
        <li className="sidebarFriendListItem">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendListItem">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendListItem">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendListItem">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendListItem">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendListItem">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendListItem">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendListItem">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendListItem">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendListItem">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriendListItem">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImage" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </Container>
  );
};
