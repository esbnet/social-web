
import { Container } from './styles';
import { Search, Person, Notifications, Chat } from '@material-ui/icons';

const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

export function Topbar() {
  return (
    <Container>

      <div className="topbarLeft">
        <span className="logo">NenoLandia</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar ">
          <Search className="seachBarIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchBarInput "
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <div className="topbarlink">Home</div>
          <div className="topbarlink">Time Line</div>
          <div className="topbarlink">About</div>
        </div>
        <div className="topbarIcons ">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge ">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge ">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge ">1</span>
          </div>
        </div>
        <img src={publicFolder + "person/1.jpeg"} alt="" className="topbarImage " />
      </div>

    </Container>

  );
};
