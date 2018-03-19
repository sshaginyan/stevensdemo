import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import NewAccount from './NewAccount';
import ShowAccount from './ShowAccount';
import EditAccount from './EditAccount';

export default (
  <div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/accounts/new" component={NewAccount} />
      <Route exact path="/accounts/:id" component={ShowAccount} />
      <Route exact path="/accounts/:id/edit" component={EditAccount} />
    </Switch>
  </div>
);
