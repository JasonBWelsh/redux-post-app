import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import styled from 'styled-components';

export const ModalWrap = styled.div`
    min-height: 30vh;
    min-width: 30vh;
    padding: 1em;
    border: 3px solid palevioletred;
    background: #000;
    color: #fff;
    position: fixed;
    top: 0;
    left: 50%;
`;

export const Button = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: palevioletred;
    border: 2px solid palevioletred;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;

    &:hover {
        background-color: palevioletred;
        color: white;
    }
`;

class Modal extends Component {
    render() {

        const { open, onClose, posts } = this.props;

        return(
            open
                ? ReactDOM.createPortal(
                    <ModalWrap className="modal">
                        <Button onClick={onClose}>X</Button>
                        <h3 className="header">{posts[0].title}</h3>
                        <p>{posts[0].body}</p>
                    </ModalWrap>,
                    document.getElementById('modal-root')
                    )
                : null
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
}); 

export default connect(mapStateToProps, { createPost })(Modal);