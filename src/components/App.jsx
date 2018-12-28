import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';

class App extends Component {
  signOut = e => {
    firebaseApp.auth().signOut();
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-danger"
          onClick={this.signOut}
        >
          Sign Out
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, null)(App);
