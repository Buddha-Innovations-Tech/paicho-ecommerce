import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter as Router } from 'react-router-dom';
import '../src/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
