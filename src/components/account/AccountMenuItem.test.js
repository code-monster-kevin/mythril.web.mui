import React from 'react';
import ReactDOM from 'react-dom';
import AccountMenuItem from './AccountMenuItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountMenuItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
