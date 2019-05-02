import React, { Component } from 'react';
import { Provider } from 'react-redux';

import PostForm from './components/PostForm';
import Posts from './components/Posts';
import Modal from './components/Modal';

import styled from 'styled-components';
import './App.css';

import store from './store';

export const ModalButton = styled.button`
  padding: 1em;
  outline: none;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 5%;
  color: #fff;
  cursor: pointer;
  transition: all .3s ease-out;

  &:hover {
    transform: scale(1.1);
  }
`;

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
        <Provider store={store}>
          <Modal open={this.state.showModal} onClose={this.toggleModal} />
          <ModalButton onClick={this.toggleModal}>Open Modal in Portal</ModalButton>
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
