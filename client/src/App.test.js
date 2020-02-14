import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test('displays title and text', () => {
  const { getByText } = render(<App />);
  getByText(/FIFA women's world cup players/i);
  getByText(/player/i);
  getByText(/dark mode/i);
  // getByText(/representing/i);

  
});
