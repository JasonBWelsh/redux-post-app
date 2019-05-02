import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import styled from 'styled-components';

export const Post = styled.div`
    margin: 0 0 .5em 0;
    border: 1px solid #434343;
    padding: .5em 1em;
`;
class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    static propTypes = {
        fetchPosts: PropTypes.func.isRequired,
        posts: PropTypes.array.isRequired,
        newPost: PropTypes.object
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <Post key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </Post>
        ));
        return (
            <div>
                <h1>Recent Posts</h1>
                {postItems}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

// const mapDispatchToProps = dispatch => ({

// })

export default connect(mapStateToProps, { fetchPosts })(Posts);