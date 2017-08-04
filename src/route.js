import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './layout/header';

const BasicExample = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" render={() => (
        <div>This is Home</div>
      )} />
      <Route path="/topics" render={() => (
        <div>This is topics</div>
      )} />
    </div>
  </Router>
)
export default BasicExample;
