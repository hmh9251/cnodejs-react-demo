import 'babel-polyfill';
import './common/reset';

import React from 'react';
import ReactDOM from 'react-dom';
import RouteConfig from './route';

ReactDOM.render(<RouteConfig />, document.getElementById('app'));
