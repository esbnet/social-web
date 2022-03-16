import './App.css';
import { Home } from './pages/Home/Home';
import { Profile } from './pages/Profile/Profile';


interface ProfileProps {
  id: number;
  profilePicture: string;
  username: string;
}

function App( profile: ProfileProps) {
  return (
    <div className="App">
      <Profile {...profile}/>
    </div>
  );
}

export default App;
