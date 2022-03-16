import { Login } from './pages/Login/Login';
import { Profile } from './pages/Profile/Profile';
import { Register } from './pages/Register/Register';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';

import './App.css';
import { Home } from './pages/Home/Home';

interface ProfileProps {
  id: number;
  profilePicture: string;
  username: string;
}

function App(profile: ProfileProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home {...profile}/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/:username' element={<Profile {...profile} />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
