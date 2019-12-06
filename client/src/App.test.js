import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test('displays title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/women's world cup players/i);
  
});
