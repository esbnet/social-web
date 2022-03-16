import './App.css';
import { Home } from './pages/Home/Home';
// import { Login } from './pages/Login/Login';
// import { Profile } from './pages/Profile/Profile';
// import { Register } from './pages/Register/Register';


interface ProfileProps {
  id: number;
  profilePicture: string;
  username: string;
}

function App( profile: ProfileProps) {
  return (
    <div className="App">
      <Home {...profile}/>
    </div>
  );
}

export default App;
