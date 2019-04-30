import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import styled from 'styled-components';

export const Button = styled.button`
    box-sizing: border-box;
     font-weight: 600;
     box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
     text-transform: uppercase;
     padding: 0.6em 0.9em;
     cursor: pointer;
     text-align: center;
     white-space: no-wrap;
     text-decoration: none;
     display: inline-block;
    border-radius: 50%;
    outline: 0;
    transition: all 0.5s ease-out;
`;

class Modal extends Component {
    render() {

        const { open, onClose, posts } = this.props;

        return(
            open
                ? ReactDOM.createPortal(
                    <div className="modal">
                        <Button onClick={onClose}>X</Button>
                        <h3>{posts[0].title}</h3>
                        <p>{posts[0].body}</p>
                    </div>,
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