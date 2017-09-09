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
    console.log('user has signed in or up', user);
    const { email } = user;
    store.dispatch(logUser(email));
    history.push('/app');
  } else {
    console.log('user has signed out or still needs to sign in.')
    history.replace('/signin');
  }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/app" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
