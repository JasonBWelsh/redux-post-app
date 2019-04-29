import React, { Component } from 'react';
import { Provider } from 'react-redux';

import PostForm from './components/PostForm';
import Posts from './components/Posts';
import './App.css';

import store from './store';

class App extends Component {

  state = {
    test: 'DRD'
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
