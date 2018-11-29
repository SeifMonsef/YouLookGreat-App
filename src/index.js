import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './views/Home/index';
import store from './rootReducer';
import Search from './views/Search';


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search/:search" component={Search} />
        </Switch>
      </App>
    </HashRouter>
  </Provider>
  , document.getElementById('root'),
);
registerServiceWorker();
