import React from 'react';
import ReactDOM from 'react-dom';
import HeaderMenuItem from './HeaderMenuItem';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <HeaderMenuItem
      id="test-header-menu-item"
      title="Test"
      badgeCounter={0}
      link="/"
    />,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
