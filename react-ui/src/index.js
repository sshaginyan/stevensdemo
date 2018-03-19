import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import routes from './routes';
import './vendor/purple3.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    { routes }
  </Router>,
  document.getElementById('root')
);
