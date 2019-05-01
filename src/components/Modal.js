import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import styled from 'styled-components';

export const ModalWrap = styled.div`
    min-height: 30vh;
    min-width: 30vh;
    padding: 1em;
    border: 3px solid #fff;
    background: #323232;
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
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;

    &:hover {
        background-color: palevioletred;
        color: white;
    }
`;

const Para = styled.p`
    background: #767676;
`;

const ReversedParagraph  = props => <p {...props} children={props.children.split('').reverse().join('')}></p>

// end styled component testing


class Modal extends Component {
    render() {

        const { open, onClose, posts } = this.props;

        return(
            open
                ? ReactDOM.createPortal(
                    <ModalWrap className="modal">
                        <Button onClick={onClose}>X</Button>
                        <h3 className="header">{posts[0].title}</h3>
                        <Para as={ReversedParagraph}>{posts[0].body}</Para>
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