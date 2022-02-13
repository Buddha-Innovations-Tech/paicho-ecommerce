import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter as Router } from 'react-router-dom';
import '../src/styles/App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
