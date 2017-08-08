import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './layout/header';
import Home from './layout/home';
import GetStart from './layout/getstart';

const BasicExample = () => (
  <Router>
    <div>
      <Header />
      <div>
        <Route exact path="/" render={() => (
          <Redirect to="/tab/good/1" />
        )} />
        <Route path="/tab" component={Home} />
        <Route path="/getstart" component={GetStart} />
      </div>
    </div>
  </Router>
)
export default BasicExample;
