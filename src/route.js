import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './layout/header';
import Home from './layout/home';
import GetStart from './layout/getstart';
import Detail from './layout/detail';

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
        <Route path="/detail/:id" component={Detail} />
      </div>
    </div>
  </Router>
)
export default BasicExample;
