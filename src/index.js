import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import createBrowserHistory from 'history/createBrowserHistory';
import reducer from './reducers';

import App from './components/App.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';

const store = createStore(reducer);

const history = createBrowserHistory();

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const { email } = user;
    store.dispatch(logUser(email));
    history.push('/app');
  } else {
    history.replace('/signin');
  }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/app" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
