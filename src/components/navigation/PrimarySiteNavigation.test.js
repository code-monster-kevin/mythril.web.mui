import React from 'react';
import ReactDOM from 'react-dom';
import PrimarySiteNavigation from './PrimarySiteNavigation';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<PrimarySiteNavigation brand="Mythril Web" />, div);

  ReactDOM.unmountComponentAtNode(div);
});
