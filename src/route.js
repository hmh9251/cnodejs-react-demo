import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './layout/header';
import Home from './layout/home';

const BasicExample = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/topics" render={() => (
        <div>This is topics</div>
      )} />
    </div>
  </Router>
)
export default BasicExample;
