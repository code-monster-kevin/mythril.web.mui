import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from 'pages/home/HomePage';
import PageNotFound from 'pages/errorpages/PageNotFound';

const ApplicationRoutes = props => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
