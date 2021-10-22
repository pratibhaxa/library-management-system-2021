import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { HashRouter as Router, Route } from 'react-router-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import Addbook from './Addbook';
import Home from './Home';
import Viewbook from './Viewbook';
import Contact from './Contact';
import Example from './Example';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <Route path='/home' component={Home} />
      <Route path='/viewbook' component={Viewbook} />
      <Route path='/addbook' component={Addbook} />
      <Route path='/contact' component={Contact} />
      <Route path='/example' component={Example} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
