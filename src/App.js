import React, { Component } from 'react';
import { Provider } from 'react-redux';

import PostForm from './components/PostForm';
import Posts from './components/Posts';
import Modal from './components/Modal';
import './App.css';

import store from './store';

class App extends Component {

  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Modal open={this.state.showModal} onClose={this.toggleModal} />
        <button onClick={this.toggleModal}>Open Modal in Portal</button>
        <Provider store={store}>
          <div className="App">
            <PostForm />
            <Posts />
          </div>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
