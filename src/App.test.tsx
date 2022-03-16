import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

interface ProfileProps {
  id: number;
  profilePicture: string;
  username: string;
}

const profile = {} as ProfileProps;


test('renders learn react link', () => {
  render(<App {...profile}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
