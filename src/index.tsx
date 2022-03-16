import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


interface ProfileProps {
  id: number;
  profilePicture: string;
  username: string;
}

const profile = {} as ProfileProps;

ReactDOM.render(
  <React.StrictMode>
    <App {...profile} />
  </React.StrictMode>,
  document.getElementById('root')
);

